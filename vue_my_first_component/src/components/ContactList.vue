<template>
  <div v-for="contact in contacts" :key="contact.id">
    <p>{{ contact.name }}</p>
    <p>{{ contact.phoneNumber }}</p>
    <p>{{ contact.email }}</p>
    <br />
  </div>
</template>
<script>
export default {
  data() {
    return {
      contacts: [
        { id: 1, name: 'Côme', phoneNumber: '0638244027', email: 'come.bonal@gmail.com' },
        { id: 2, name: 'Bonal', phoneNumber: '0750242635', email: 'come.come@gmail.com' },
        { id: 3, name: 'Lucas', phoneNumber: '0624455871', email: 'bonal.bonal@gmail.com' }
      ]
    }
  },
  methods: {},
  computed: {}
}
</script>
