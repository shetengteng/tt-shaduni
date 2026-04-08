<template>
  <view class="tt-avatar" :class="'tt-avatar--' + shape" :style="avatarStyle">
    <image v-if="src" class="tt-avatar__img" :src="src" mode="aspectFill" />
    <text v-else class="tt-avatar__text">{{ text ? text[0].toUpperCase() : '' }}</text>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { avatarProps } from './props'

defineProps(avatarProps)
</script>

<style>
.tt-avatar { display: inline-flex; align-items: center; justify-content: center; overflow: hidden; background: var(--tt-muted, #f5f5f5); color: var(--tt-muted-foreground, #737373); font-weight: 600; }
.tt-avatar--circle { border-radius: 50%; }
.tt-avatar--square { border-radius: var(--tt-radius, 6px); }
.tt-avatar__img { width: 100%; height: 100%; }
.tt-avatar__text { font-size: 14px; }
</style>
