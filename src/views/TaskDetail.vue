<template>
  <div class="task-detail-container">
    <section v-if="task" class="task-detail">
      <h1>{{ task.title }}</h1>
      <p><strong>Description:</strong> {{ task.description }}</p>
      <p><strong>Status:</strong> {{ task.status }}</p>
      <p><strong>Created At:</strong> {{ new Date(task.createdAt).toLocaleDateString() }}</p>
      <button class="delete-button" @click="deleteTask">Delete Task</button>
      <p v-if="deleteMessage" class="delete-message">{{ deleteMessage }}</p>
    </section>
    
    <section v-else>
      <p>Error displaying the task</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from '@/api/axios';
import { Task } from '@/interfaces/tasks.interface';

const route = useRoute();
const router = useRouter();
const taskId = route.params.id; 
const task = ref<Task | null>(null);
const deleteMessage = ref('');

const fetchTaskDetails = async () => {
  if (!taskId) {
    console.error('Task ID is undefined');
    return;
  }

  try {
    const response = await axios.get<Task>(`/tasks/${taskId}`);
    task.value = response.data;
  } catch (error) {
    console.error('Error fetching task details:', error);
  }
};

const deleteTask = async () => {
  if (!taskId) {
    console.error('Task ID is undefined');
    return;
  }

  try {
    await axios.delete(`/tasks/${taskId}`);
    deleteMessage.value = 'The task has been deleted';
    setTimeout(() => {
      router.push('/tasks');
    }, 2000);
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};

onMounted(fetchTaskDetails);
</script>

<style scoped>
.task-detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.task-detail {
  margin-bottom: 2rem;
}

.task-detail h1 {
  font-size: 2.5rem;
  color: #42b983;
}

.task-detail p {
  font-size: 1.25rem;
  color: #a5a3a3;
  margin: 0.5rem 0;
}

.delete-button {
  background-color: #e63946;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-button:hover {
  background-color: #d62828;
}

.delete-message {
  margin-top: 1rem;
  font-size: 1.25rem;
  color: #42b983;
}
</style>
