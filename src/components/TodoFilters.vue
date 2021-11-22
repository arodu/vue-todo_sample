<template>
  <div class="d-flex justify-content-between">
    <a @click="changeFilter('all')" role="button">All</a>
    <a @click="changeFilter('actives')" role="button">Actives</a>
    <a @click="changeFilter('completed')" role="button">Completed</a>
  </div>
</template>

<script>
import { inject } from "@vue/runtime-core";
export default {
  setup() {
    const { filterType } = inject("todoStore");

    const changeFilter = (type) => {
      filterType.value = type;
    };

    return {
      changeFilter,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>