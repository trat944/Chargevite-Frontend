<template>
  <div class="home-container">
    <section class="welcome-section">
      <h1>Welcome to the Task Manager</h1>
      <p>
        Welcome to the Task Manager where you can efficiently manage all your tasks with ease. Stay organized and boost your productivity by keeping track of your daily tasks.
      </p>
    </section>

    <section class="explanation-section">
      <h2>What You Can Do Here</h2>
      <p>
        Here you will be able to see your tasks, view details for each task, and add new tasks to your list. Our task manager provides a simple and intuitive interface to help you stay on top of your tasks.
      </p>
    </section>

    <section class="guide-section">
      <h2>How to Use</h2>
      <p>
        To view your tasks, click on <RouterLink to="/tasks" class="link">Tasks</RouterLink> in the navbar. To add a new task, click on <RouterLink to="/add-task" class="link">Add Task</RouterLink>. You can also click on a task to see more details about it.
      </p>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.home-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.welcome-section {
  margin-bottom: 2rem;
}

.welcome-section h1 {
  font-size: 2.5rem;
  color: #42b983;
}

.welcome-section p {
  font-size: 1.25rem;
  color: #a5a3a3;
}

.explanation-section {
  margin-bottom: 2rem;
}

.explanation-section h2 {
  font-size: 2rem;
  color: #35495e;
}

.explanation-section p {
  font-size: 1.15rem;
  color: #a5a3a3;
}

.guide-section h2 {
  font-size: 2rem;
  color: #35495e;
}

.guide-section p {
  font-size: 1.15rem;
  color: #a5a3a3;
}

.link {
  color: #42b983;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
