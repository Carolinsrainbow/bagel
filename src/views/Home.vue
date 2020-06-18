<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Estás en el home</h1>
<button @click="logout">Cerrar Sesión</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Firebase from 'firebase';
export default {
  name: "home",
  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then(resolve => {
          this.$router.push('Login');
        })
        .catch(reject => {
          console.log(reject);
        });
    },
  },
};
</script>