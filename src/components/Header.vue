<template>
  <header class="header">
    <div class="header-left">
      <h1>Task Manager</h1>
    </div>
    <nav class="header-right">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/tasks">Tasks</RouterLink>
      <RouterLink to="/add-task">Add Task</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.header {
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: white;
}

.header-left h1 {
  margin: 0;
}

.header-right {
  display: flex;
  align-items: center;
}

.header-right a {
  margin-left: 1rem;
  color: white;
  text-decoration: none;
}

.header-right a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .header-right {
    flex-direction: column;
    align-items: flex-start;
  }

  .header-right a {
    margin: 0.5rem 0;
  }

  .header {
    align-items: baseline;
}
}
</style>
