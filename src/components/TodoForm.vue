<template>
  <div>
    <form @submit.prevent="add">
      <input type="text" v-model.trim="newTask" class="form-control" />
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { inject } from "@vue/runtime-core";
export default {
  setup() {
    const newTask = ref("");
    const { addNewTask } = inject("todoStore");

    const add = function () {
      if (newTask.value === "") {
        console.log("It is empty");
        return;
      }

      addNewTask(newTask.value);

      newTask.value = "";
    };

    return {
      newTask,
      add,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>