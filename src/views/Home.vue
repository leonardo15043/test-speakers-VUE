
<template>
  <Header></Header>
  <Menu></Menu>
  <div class="container">
      <button class="btn"> <v-icon name="hi-plus-sm" /> <span>Add new user</span></button>
      <div class="box mt-1">
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
            <tr>
              <td>Lorem ip</td>
              <td>Lorem ip</td>
              <td>Lorem ip</td>
              <td>Lorem ip</td>
              <td>Lorem ip</td>
              <td><a href="#">View todos</a></td>
            </tr>
            <tr>
              <td>Lorem ip</td>
              <td>Lorem ip</td>
              <td>Lorem ip</td>
              <td>Lorem ip</td>
              <td>Lorem ip</td>
              <td><a href="#">View todos</a></td>
            </tr>
            <tr>
              <td>Lorem ip</td>
              <td>Lorem ip</td>
              <td>Lorem ip</td>
              <td>Lorem ip</td>
              <td>Lorem ip</td>
              <td><a href="#">View todos</a></td>
            </tr>
            <tr>
              <td>Lorem ip</td>
              <td>Lorem ip</td>
              <td>Lorem ip</td>
              <td>Lorem ip</td>
              <td>Lorem ip</td>
              <td><a href="#">View todos</a></td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
export default {
  name: "Dashboard",
  components: {
    Header,
    Menu
  }
};
</script>