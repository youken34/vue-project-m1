<template>
  <div>
    <ButtonPagePrincipale @custom-event="afficherPage('Page principale')" />
    <ButtonAPropos @custom-event="afficherPage('A propos')" />
    <p>{{ contenu }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ButtonPagePrincipale from './PagePrincipale.vue'
import ButtonAPropos from './AproPos.vue'
const contenu = ref('Page principale')

const afficherPage = (page) => {
  contenu.value = page
}
</script>
