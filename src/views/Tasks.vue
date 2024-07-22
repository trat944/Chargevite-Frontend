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
      <div v-else class="task-grid">
        <div
          v-for="task in tasks"
          :key="task._id"
          class="task-item"
          @click="goToTaskDetail(task._id!)"
        >
          <h3>{{ task.title }}</h3>
          <p>Status: {{ task.status }}</p>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from '@/api/axios';
import { Task } from '@/interfaces/tasks.interface';

const tasks = ref<Task[]>([]); 
const router = useRouter();

const fetchTasks = async () => {
  try {
    const response = await axios.get('/tasks');
    tasks.value = response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};

const goToTaskDetail = (id: string) => {
  router.push(`/tasks/${id}`);
};

onMounted(fetchTasks);
</script>


<style scoped>
.tasks-container {
  max-width: 90%;
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

.task-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.task-item {
  flex: 1 1 28%; 
  max-width: 28%;
  min-width: 250px;
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

@media (max-width: 768px) {
  .task-item {
    flex: 1 1 45%; 
    max-width: 45%;
  }
}

@media (max-width: 480px) {
  .task-item {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
