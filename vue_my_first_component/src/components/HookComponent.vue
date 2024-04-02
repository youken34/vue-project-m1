<template>
  <div>
    <p>Value: {{ counter }}</p>
    <button @click="increment">Increment</button>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue'
const counter = ref(0)
const message = ref('')
onMounted(() => {
  message.value = 'Composant monté dans le DOM'
})
onUpdated(() => {
  if (counter.value != 0) {
    message.value = 'Composant mis à jour'
  }
})
const increment = () => {
  counter.value++
}
</script>

<style scoped></style>
