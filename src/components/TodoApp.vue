<template>
  <div>
    <h1>Todo List</h1>
    <todo-form />
    <todo-list />
    <todo-filters />
  </div>
</template>

<script>
import { provide } from "@vue/runtime-core";
import TodoForm from "./TodoForm.vue";
import TodoList from './TodoList.vue';
import TodoFilters from './TodoFilters.vue';
import todoStore from "../store/todos";

export default {
  components: {
    TodoForm,
    TodoList,
    TodoFilters,
  },
  setup() {
    provide("todoStore", todoStore);

    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
