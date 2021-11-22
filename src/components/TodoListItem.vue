<template>
  <li class="list-group-item d-flex justify-content-between">
    <span
      class="todo-text"
      role="button"
      :class="{ completed: todo.completed }"
      @click="complete(todo.id)"
    >
      {{ todo.text }}
    </span>
    <i
      class="fas fa-times text-danger"
      role="button"
      @click="remove(todo.id)"
    ></i>
  </li>
</template>

<script>
import { inject } from "@vue/runtime-core";
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { complete, remove } = inject("todoStore");

    return {
      complete,
      remove,
    };
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>