<template>
  <div class="task-list">
    <strong>Taches</strong>
    <task-item v-for="(task, index) in tasks" :key="index" :task="task" />
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue'

export default {
  components: {
    TaskItem
  },
  data() {
    return {
      tasks: [
        { text: 'Tâche 1', completed: false },
        { text: 'Tâche 2', completed: true },
        { text: 'Tâche 3', completed: false }
      ]
    }
  }
}
</script>

<style>
.task-list {
  margin-top: 20px;
}

/* Ajoutez des styles supplémentaires au besoin */
</style>
