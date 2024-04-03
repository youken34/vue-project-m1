<script setup lang="ts">
import Product from '@/models/Product'
import { defineProps } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <li>{{ product.name }} - {{ product.price }} €</li>
</template>
