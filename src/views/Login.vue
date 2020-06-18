<template>
  <div id="app">
    <h1>Ingresa tu email</h1>
    <input type="text" v-model="email" />
    <h1>Ingresa tu contraseña</h1>
    <input type="text" v-model="password" />
    <button @click="login">Log in</button>
  </div>
</template>
​
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
​ #nav {
  padding: 30px;
}
​ #nav a {
  font-weight: bold;
  color: #2c3e50;
}
​ #nav a.router-link-exact-active {
  color: #42b983;
}
</style>
​
​
<script>
import Firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: " "
    };
  },
  methods: {
    login() {
      Firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          accept => {
            alert("Fuiste logeado! revisa la consola");
            this.quienSoy;
          },
          reject => {
            alert("No mi hermano, usted no existe");
            console.log(reject.message);
          }
        );
    },
  }
};
</script>