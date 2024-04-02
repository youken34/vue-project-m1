<template>
  <div class="form-container">
    <h1 v-if="registrationDone">
      Veuillez valider votre inscription via le mail que nous venons d’envoyer à {{ user.email }}
    </h1>
    <div v-else>
      <form @submit.prevent="onSubmit">
        <input v-model="user.name" type="text" class="input-field" placeholder="Name" />
        <p v-if="champ1 == false" class="error-message">Ce champ est obligatoire !</p>
        <input v-model="user.email" type="text" class="input-field" placeholder="Email" />
        <p v-if="champ2 == false" class="error-message">
          Ce champ nécessite une adresse email contenant un @ !
        </p>
        <input v-model="user.password" type="password" class="input-field" placeholder="Password" />
        <p v-if="champ3 == false" class="error-message">8 caractères requis !</p>
        <button type="submit">S'inscrire</button>
      </form>
      <div class="user-data">
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Password:</strong> {{ user.password }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      },
      champ1: null,
      champ2: null,
      champ3: null,
      registrationDone: false
    }
  },
  methods: {
    onSubmit() {
      if (this.user.name.length > 0) {
        this.champ1 = true
      } else {
        this.champ1 = false
      }
      if (this.user.email.length > 8 && this.user.email.includes('@')) {
        this.champ2 = true
      } else {
        this.champ2 = false
      }
      if (this.user.password.length > 8) {
        this.champ3 = true
      } else {
        this.champ3 = false
      }
      if (this.champ1 == true && this.champ2 == true && this.champ3) {
        this.registrationDone = true
      }
    }
  },
  computed: {}
}
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}

.user-data {
  margin-top: 20px;
}

.user-data p {
  margin-bottom: 5px;
}
</style>
