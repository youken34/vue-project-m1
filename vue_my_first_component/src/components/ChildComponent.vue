<!-- ChildComponent.vue -->
<template>
  <div>
    <button @click="emitCustomEvent">Déclencher l'événement personnalisé</button>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'

// Définition des événements émis avec defineEmits
const emits = defineEmits(['custom-event'])

// Définition de la fonction pour émettre l'événement personnalisé
const emitCustomEvent = () => {
  emits('custom-event', { message: 'Mon message' })
}
</script>
