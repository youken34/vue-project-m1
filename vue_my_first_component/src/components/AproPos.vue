<template>
  <button @click="emitClick">A propos</button>
</template>

<script setup>
import { defineEmits } from 'vue'
const emits = defineEmits(['custom-event'])

const emitClick = () => {
  emits('custom-event', 'A propos')
}
</script>
