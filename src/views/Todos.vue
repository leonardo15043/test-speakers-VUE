<template>
  <Header></Header>
  <Menu></Menu>
  <div class="container">
    <button class="btn" @click="formAdd = !formAdd"> <v-icon name="hi-plus-sm" /><span>Add new todo</span></button>
    <AddTodo @getTodoAdd="getTodoAdd" v-if="formAdd"/>
    <div class="box mt-1">
      <div class="title">Todos</div>
      <table class="fl-table">
        <thead>
          <tr>
              <th>Title</th>
              <th>Completed</th>
              <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="todo in todos" :key="todo.id">
              <td >{{ todo.title }}</td>
              <td><input type="checkbox" id="checkAvanzado" @click="todoState(todo)"/></td>
              <td><button class="btn danger" @click="deleteTodo(todo.id)"><span>Delete</span></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>

import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import AddTodo from "@/components/AddTodo.vue";
import { getTodos, updateTodo, deleteTodo } from '../services/TodosService';

export default {
  name: "Todos",
  data(){
    return {
      todos: [],
      formAdd: false
    }
  },
  components: {
    Header,
    Menu,
    AddTodo
  },
  async created(){
    const { data } = await getTodos(this.$route.params.id);
    this.todos = data;
  },
  methods: {
    getTodoAdd(data) {
      this.todos.unshift(data);
      this.formAdd = false;
    },
    todoState( todo ){
      todo.completed = !todo.completed;
      updateTodo(todo).then(data=>{
      });
    },
    deleteTodo( idTodo ){
      deleteTodo(idTodo ).then( data =>{
          this.todos = this.todos.filter((todo) => todo.id !== idTodo );
      });
    }
  }
}
</script>