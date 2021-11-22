import { ref } from "@vue/runtime-core";
import { computed } from "@vue/reactivity";

const todos = ref([]);

const addNewTask = function (text) {
  let task = {
    text: text,
    id: Date.now(),
    completed: false,
  };

  if (todos.value.push(task)) {
    return true;
  }

  return false;
};

const complete = (id) => {
  todos.value = todos.value.map((item) => {
    if (item.id === id) {
      item.completed = !item.completed;
    }

    return item;
  });
};

const remove = (id) => {
  todos.value = todos.value.filter((item) => {
    return item.id !== id;
  });
};

const countActives = computed(() => {
  return todos.value.filter((item) => item.completed === false).length;
});

const removeComplete = () => {
  todos.value = todos.value.filter((item) => item.completed !== true);
};

const filterType = ref('all')
const filter = computed(() => {
    if (filterType.value === 'actives') {
        return todos.value.filter((item) => item.completed !== true)
    }

    if (filterType.value === 'completed') {
        return todos.value.filter((item) => item.completed === true)
    }

    return todos.value
})

export default {
  todos,
  addNewTask,
  complete,
  remove,
  countActives,
  removeComplete,
  filterType,
  filter,
};
