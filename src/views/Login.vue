<template>
<div class="login-page">
  <div class="form">
    <form class="login-form" @submit.prevent="login">
      <input type="text" placeholder="username" v-model="username" name="username"/>
      <input type="password" placeholder="password" v-model="password" name="password"/>
      <button>login</button>
    </form>
  </div>
</div>
</template>
<script>
export default {
  name: "Login",
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function (){
      if(this.username == 'leonardo15043' && this.password == 15043){
          localStorage.setItem('name','leonardo Arturo Hernandez');
          localStorage.setItem('photo','face.png');
          localStorage.setItem('activeSession',true);
          this.$router.push('home');
      } else {
        alert("Datos incorrectos");
      }
    }
  }
};
</script>
