<template>
  <div>
    <h2>Liste des produits disponibles :</h2>
    <ul>
      <ProductItem v-for="product in availableProducts" :key="product.id" :product="product" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import ProductItem from '@/components/ProductItem.vue'
import Product from '@/models/product'
import { ref, computed } from 'vue'

const products = ref<Product[]>([
  new Product(1, 'Produit 1', 10, 5),
  new Product(2, 'Produit 2', 20, 0),
  new Product(3, 'Produit 3', 15, 8),
  new Product(4, 'Produit 4', 25, 3)
])

const availableProducts = computed(() => products.value.filter((product) => product.stock > 0))
</script>
