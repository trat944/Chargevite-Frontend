<template>
  <div class="tasks-container">
    <section class="intro-section">
      <h1>Your Tasks</h1>
      <p>
        Here you have the list of tasks that come with the following information: Title and Status.
      </p>
      <p>
        Click on each task to view its details, including ID, title, description, status (pending, in progress, completed), and creation date.
      </p>
    </section>

    <section class="tasks-list">
      <h2>Task List</h2>
      <div v-if="tasks.length === 0">
        <p>No tasks available yet.</p>
      </div>
      <div v-else>
        <div
          v-for="task in tasks"
          :key="task.id"
          class="task-item"
          @click="goToTaskDetail(task.id)"
        >
          <h3>{{ task.title }}</h3>
          <p>Status: {{ task.status }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const tasks = ref([]);
const router = useRouter();

const fetchTasks = async () => {
  try {
    const response = await axios.get('http://localhost:3000/tasks');
    tasks.value = response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};

const goToTaskDetail = (id) => {
  router.push(`/tasks/${id}`);
};

onMounted(fetchTasks);
</script>

<style scoped>
.tasks-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.intro-section {
  margin-bottom: 2rem;
}

.intro-section h1 {
  font-size: 2.5rem;
  color: #42b983;
}

.intro-section p {
  font-size: 1.25rem;
  color: #a5a3a3;
}

.tasks-list {
  margin-top: 2rem;
}

.tasks-list h2 {
  font-size: 2rem;
  color: #35495e;
}

.tasks-list p {
  font-size: 1.15rem;
  color: #a5a3a3;
}

.task-item {
  padding: 1rem;
  margin: 1rem 0;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.task-item:hover {
  background-color: #e0f7fa;
}

.link {
  color: #42b983;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>