
<template>
  <Header></Header>
  <Menu></Menu>
  <div class="container">
      <button class="btn" @click="formAdd = !formAdd"> <v-icon name="hi-plus-sm" /> <span>Add new user</span></button>
      <AddUser @getUserAdd="getUserAdd" v-if="formAdd"/>
      <div class="box mt-1">
        <div class="title">Users</div>
        <table class="fl-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Company</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td >{{ user.name }}</td>
              <td >{{ user.username }}</td>
              <td >{{ user.email }}</td>
              <td >{{ user.address.street }}</td>
              <td >{{ user.company.name }}</td>
              <td >
                <RouterLink :to="{ path: `/todos/${user.id}`, params: { id: this.id } }">View todos</RouterLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import AddUser from "@/components/AddUser.vue";
import { allUsers } from '../services/UsersService';
export default {
  name: "Dashboard",
  data(){
    return {
      users: [],
      formAdd: false
    }
  },
  components: {
    Header,
    Menu,
    AddUser
  },
  async created(){
    const { data } = await allUsers();
    this.users = data;
  },
  methods: {
    getUserAdd(data) {
      this.users.unshift(data);
      this.formAdd = false;
    }
  }
}
</script>