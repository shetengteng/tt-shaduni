window.TTDocs = window.TTDocs || {}

const groupOrder = window.TTDocs.componentGroupOrder || []
const componentGroups = window.TTDocs.componentGroups || {}
const componentEntries = window.TTDocs.componentEntries || {}
const componentOrder = groupOrder.flatMap((group) => componentGroups[group] || [])

window.TTDocs.allComponents = componentOrder
  .map((id) => componentEntries[id])
  .filter(Boolean)
