<template>
  <div>
    <li
      class="
        list-group-item list-group-item-secondary
        d-flex
        justify-content-between
      "
    >
      <span>{{ countActives }} actives</span>
      <span class="btn btn-secondary btn-sm" @click="removeComplete()"
        >Remove completed</span
      >
    </li>
  </div>
</template>

<script>
import { computed, inject } from "@vue/runtime-core";
export default {
  setup() {
    const { countActives, removeComplete } = inject("todoStore");

    return {
      countActives,
      removeComplete,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>