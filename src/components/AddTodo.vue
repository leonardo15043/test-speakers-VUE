<template>
    <div class="form">
        <form  @submit.prevent="addTodo">
            <input type="text" placeholder="Title" name="title" v-model="title"/>
            <div class="group-radio">
                <label>Completed</label>
                <input type="radio" id="radio1" name="completed" value="true" v-model="completed" checked> Yes
                <input type="radio"  id="radio2" name="completed" v-model="completed" value="false">No
            </div>
            <button>Save</button>
        </form>
    </div>
</template>

<script>
import { saveTodo } from '../services/TodosService';

export default {
  name: "AddTodo",
  data(){
    return {
        title: "",
        completed: true
    }
  },
  methods: {
    addTodo: function (){
      const todo = {
        title: this.title,
        completed: this.completed
      }
      saveTodo( todo ).then( ( todoData )=>{
        this.$emit("getTodoAdd", todoData.data);
      });
    }
  }
}
</script>