<template>
    <div class="form">
        <form  @submit.prevent="addUser">
            <input type="text" placeholder="Name" name="name" v-model="name"/>
            <input type="text" placeholder="Username" name="username" v-model="username"/>
            <input type="text" placeholder="Email" name="email" v-model="email"/>
            <input type="text" placeholder="Address" name="address" v-model="address.street"/>
            <input type="text" placeholder="Company" name="company" v-model="company.name"/>
            <button>Save</button>
        </form>
    </div>
</template>
<script>
import { saveUser } from '../services/UsersService';

export default {
  name: "AddUser",
  data(){
    return {
      name: "",
      username: "",
      email: "",
      address: {
        street: ""
      },
      company:{
        name: ""
      }
    }
  },
   methods: {
    addUser: function (){
      const user = {
        name: this.name,
        username: this.username,
        email: this.email,
        address: {
          street: this.address.street
        },
        company: {
          name: this.company.name
        }
      }
      saveUser( user ).then( ( userData )=>{
        this.$emit("getUserAdd", userData.data);
      });
    }
  }
}
</script>