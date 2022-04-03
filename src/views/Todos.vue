<template>
  <Header></Header>
  <Menu></Menu>
  <div class="container">
    <div class="box mt-1">
        <div class="title">Todos</div>
        <table class="fl-table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in todos" :key="todo.id">
                    <td >{{ todo.title }}</td>
                    <td >{{ todo.completed }}</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>
<script>

import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import { getTodos } from '../services/TodosService';

export default {
  name: "Todos",
  data(){
    return {
      todos: []
    }
  },
  components: {
    Header,
    Menu,
  },
  async created(){
    const { data } = await getTodos(this.$route.params.id);
    this.todos = data;
  },
}
</script>