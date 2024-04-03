<template>
  <div class="task-item">
    <input type="checkbox" v-model="task.completed" />
    <span :class="{ completed: task.completed }">{{ task.text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.task-item {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}

.task-item input[type='checkbox'] {
  margin-right: 8px;
}

.completed {
  text-decoration: line-through;
  color: #888;
}
</style>
