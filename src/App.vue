<!--<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>-->

<template>
  <router-view />
</template>
<script>
  export default {
    name: 'App'
  }
</script>
<style lang="scss">
  @import './common/css/theme.scss'; 
  @import './common/css/form.scss'; 
  @import './common/css/tables.scss'; 
  @import './common/css/colors.scss'; 
</style> 