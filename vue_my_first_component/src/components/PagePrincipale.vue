<template>
  <button @click="emitClick">Page principale</button>
</template>

<script setup>
import { defineEmits } from 'vue'
const emits = defineEmits(['custom-event'])

const emitClick = () => {
  emits('custom-event', 'Page principale')
}
</script>
