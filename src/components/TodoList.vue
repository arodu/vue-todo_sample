<template>
  <ul class="list-group mt-3">
    <todo-list-item v-for="(todo, index) in todos" :key="index" :todo="todo" />
    <todo-footer v-if="todos.length !== 0" />
  </ul>
</template>

<script>
import { inject } from "@vue/runtime-core";
import TodoListItem from "./TodoListItem.vue";
import TodoFooter from './TodoFooter.vue';
export default {
  components: {
    TodoListItem,
    TodoFooter,
  },
  setup() {
    const { filter } = inject("todoStore");

    return {
      todos: filter,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>