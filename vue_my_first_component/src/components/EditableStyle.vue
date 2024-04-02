<template>
  <div>
    <label for="colorInput">Enter a color name:</label>
    <input type="text" id="colorInput" v-model="colorName" />
    <p v-bind:style="{ color: colorName }">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minima eius maxime quis
      quod culpa, blanditiis perferendis saepe molestiae ipsam recusandae non itaque quas voluptatem
      a, doloribus minus nobis nostrum?
    </p>
    <label for="colorSelect">Choose a color:</label>
    <select id="colorSelect" v-model="selectedColor">
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="yellow">Yellow</option>
      <option value="orange">Orange</option>
      <!-- Ajoutez d'autres options au besoin -->
    </select>
    <p v-bind:style="{ color: selectedColor }">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minima eius maxime quis
      quod culpa, blanditiis perferendis saepe molestiae ipsam recusandae non itaque quas voluptatem
      a, doloribus minus nobis nostrum?
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorName: '',
      selectedColor: 'black'
    }
  }
}
</script>
