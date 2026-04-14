/**
 * EMAS 数据库操作封装（CloudBase 风格链式调用）
 * 
 * Usage:
 *   import { createEmasDb } from 'tt-shaduni/cloud-emas/database'
 *   const { db, dbCmd } = createEmasDb(emasInstance)
 *   const res = await db.collection('xxx').where({ accountId }).get()
 */

import type { EmasInstance } from './init'
import { handleEmasError } from './error'

export const dbCmd = {
  eq: (val: any) => val,
  neq: (val: any) => ({ $ne: val }),
  lt: (val: any) => ({ $lt: val }),
  lte: (val: any) => ({ $lte: val }),
  gt: (val: any) => ({ $gt: val }),
  gte: (val: any) => ({ $gte: val }),
  in: (arr: any[]) => ({ $in: arr }),
  nin: (arr: any[]) => ({ $nin: arr }),
  and: (conditions: any[]) => ({ $and: conditions }),
  or: (conditions: any[]) => ({ $or: conditions }),
  exists: (bool: boolean) => ({ $exists: bool }),
}

export const command = dbCmd

class CollectionReference {
  private _collectionName: string
  private _emas: EmasInstance
  private _where: Record<string, any> = {}
  private _docId: string | null = null
  private _skip = 0
  private _limit = 1000
  private _orderBy: { field: string; order: string }[] = []
  private _projection: Record<string, any> | null = null

  constructor(collectionName: string, emas: EmasInstance) {
    this._collectionName = collectionName
    this._emas = emas
  }

  private async _getCollection() {
    await this._emas.init()
    const emasDb = this._emas.getDb()
    if (!emasDb) throw new Error('EMAS 数据库未初始化')
    return emasDb.collection(this._collectionName)
  }

  doc(id: string) {
    this._docId = id
    return this
  }

  where(condition: Record<string, any>) {
    this._where = condition
    return this
  }

  skip(n: number) {
    this._skip = n
    return this
  }

  limit(n: number) {
    this._limit = n
    return this
  }

  orderBy(field: string, order = 'asc') {
    this._orderBy.push({ field, order })
    return this
  }

  field(projection: Record<string, any>) {
    this._projection = projection
    return this
  }

  private _buildSort() {
    if (this._orderBy.length === 0) return undefined
    const sort: Record<string, number> = {}
    for (const item of this._orderBy) {
      sort[item.field] = item.order === 'desc' ? -1 : 1
    }
    return sort
  }

  async get() {
    try {
      const collection = await this._getCollection()

      if (this._docId) {
        const findOneOpts: any = {}
        if (this._projection) findOneOpts.projection = this._projection
        const res = await collection.findOne({ _id: this._docId }, findOneOpts)
        const doc = res.result
        return { data: doc ? [doc] : [], errMsg: 'ok' }
      }

      const options: any = { skip: this._skip, limit: this._limit }
      const sort = this._buildSort()
      if (sort) options.sort = sort
      if (this._projection) options.projection = this._projection

      const res = await collection.find(this._where, options)
      return { data: res.result || [], errMsg: 'ok' }
    } catch (e) {
      handleEmasError(e, `查询 ${this._collectionName}`)
    }
  }

  async getAll() {
    const MAX_LIMIT = 1000
    let allData: any[] = []
    let skip = 0
    let hasMore = true

    while (hasMore) {
      this._skip = skip
      this._limit = MAX_LIMIT
      const res = await this.get()
      const data = res?.data || []
      allData = allData.concat(data)
      if (data.length < MAX_LIMIT) {
        hasMore = false
      } else {
        skip += MAX_LIMIT
      }
    }

    return { data: allData, total: allData.length, errMsg: 'ok' }
  }

  async count() {
    try {
      const collection = await this._getCollection()
      const res = await collection.count(this._where)
      return { total: res.result || 0, errMsg: 'ok' }
    } catch (e) {
      handleEmasError(e, `统计 ${this._collectionName}`)
    }
  }

  async add(data: Record<string, any>) {
    try {
      const collection = await this._getCollection()
      const res = await collection.insertOne(data)
      return {
        id: res.result?.insertedId,
        _id: res.result?.insertedId,
        errMsg: 'ok',
      }
    } catch (e) {
      handleEmasError(e, `新增 ${this._collectionName}`)
    }
  }

  async addBatch(dataList: Record<string, any>[]) {
    try {
      const collection = await this._getCollection()
      const res = await collection.insertMany(dataList)
      return {
        count: res.result ? Object.keys(res.result).length : 0,
        ids: res.result || {},
        errMsg: 'ok',
      }
    } catch (e) {
      handleEmasError(e, `批量新增 ${this._collectionName}`)
    }
  }

  async update(data: Record<string, any>) {
    try {
      const collection = await this._getCollection()
      const updateDoc = { $set: data }

      if (this._docId) {
        const res = await collection.updateOne({ _id: this._docId }, updateDoc)
        return { updated: res.result?.modifiedCount || 0, errMsg: 'ok' }
      }

      const res = await collection.updateMany(this._where, updateDoc)
      return { updated: res.result?.modifiedCount || 0, errMsg: 'ok' }
    } catch (e) {
      handleEmasError(e, `更新 ${this._collectionName}`)
    }
  }

  async remove() {
    try {
      const collection = await this._getCollection()

      if (this._docId) {
        const res = await collection.deleteOne({ _id: this._docId })
        return { deleted: res.result?.deletedCount || 0, errMsg: 'ok' }
      }

      const res = await collection.deleteMany(this._where)
      return { deleted: res.result?.deletedCount || 0, errMsg: 'ok' }
    } catch (e) {
      handleEmasError(e, `删除 ${this._collectionName}`)
    }
  }
}

export interface MockDb {
  collection(name: string): any
}

export function createEmasDb(emas: EmasInstance, mockDb?: MockDb) {
  const db = {
    collection(name: string) {
      if (mockDb) return mockDb.collection(name)
      return new CollectionReference(name, emas)
    },
    command: dbCmd,
  }

  return { db, dbCmd, command: dbCmd }
}
