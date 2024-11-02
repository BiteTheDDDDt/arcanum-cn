import { computed } from 'vue';
import settings from '@/modules/settings';
<template>
  <details open = true>
    <summary>{{calculateTitle()}}</summary>
    <slot></slot>
  </details>
</template>

<script setup>
import Settings from "@/modules/settings.js"

const props = defineProps({
    title : {
      type: String,
    }
})

function calculateTitle() {
  return (props.title ?? "Others").toTitleCase();
}
</script>

<style>
details {
  margin: 5px;
}
</style>