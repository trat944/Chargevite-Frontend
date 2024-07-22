<template>
  <div class="task-detail-container">
    <section v-if="task" class="task-detail">
      <div class="task-info">
        <h1>{{ task.title }}</h1>
        <button @click="editTitle = !editTitle" class="edit-button">Edit</button>
      </div>
      <div v-if="editTitle">
        <input v-model="newTitle" placeholder="New title" />
        <button @click="updateTask('title')">Save</button>
      </div>
      <div class="task-info">
        <p><strong>Description:</strong> {{ task.description }}</p>
        <button @click="editDescription = !editDescription" class="edit-button">Edit</button>
      </div>
      <div v-if="editDescription">
        <textarea v-model="newDescription" placeholder="New description"></textarea>
        <button @click="updateTask('description')">Save</button>
      </div>
      <div class="task-info">
        <p><strong>Status:</strong> {{ task.status }}</p>
        <button @click="editStatus = !editStatus" class="edit-button">Edit</button>
      </div>
      <div v-if="editStatus">
        <select v-model="newStatus">
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button @click="updateTask('status')">Save</button>
      </div>
      <div class="task-info">
        <p><strong>Created At:</strong> {{ new Date(task.createdAt).toLocaleDateString() }}</p>
      </div>
      <div class="delete-button-container">
        <button class="delete-button" @click="deleteTask">Delete Task</button>
        <p v-if="deleteMessage" class="delete-message">{{ deleteMessage }}</p>
      </div>
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
const editTitle = ref(false);
const editDescription = ref(false);
const editStatus = ref(false);
const newTitle = ref('');
const newDescription = ref('');
const newStatus = ref('');

const fetchTaskDetails = async () => {
  try {
    const response = await axios.get<Task>(`/tasks/${taskId}`);
    task.value = response.data;
    newTitle.value = task.value.title;
    newDescription.value = task.value.description;
    newStatus.value = task.value.status;
  } catch (error) {
    console.error('Error fetching task details:', error);
  }
};

const deleteTask = async () => {
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

const updateTask = async (field: string) => {
  try {
    const updateData: Partial<Task> = {};
    if (field === 'title') {
      updateData.title = newTitle.value;
      editTitle.value = false;
    } else if (field === 'description') {
      updateData.description = newDescription.value;
      editDescription.value = false;
    } else if (field === 'status') {
      updateData.status = newStatus.value;
      editStatus.value = false;
    }
    await axios.patch(`/tasks/${taskId}`, updateData);
    fetchTaskDetails();
  } catch (error) {
    console.error(`Error updating task ${field}:`, error);
  }
};

onMounted(fetchTaskDetails);
</script>


<style scoped>
.task-detail-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 3rem;
  background-color: #101D26;
  border-radius: 20px;
  opacity: 0.7;
}

.task-detail {
  margin-bottom: 2rem;
}

.task-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.task-info h1,
.task-info p {
  color: #a5a3a3;
  margin: 0;
  word-wrap: break-word;
  word-break: break-word;
}

.task-info p strong {
  color: #35495e;
}

.edit-button {
  background-color: #42b983;
  margin-left: 1rem;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.edit-button:hover {
  background-color: #36a573;
}

input,
textarea,
select {
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 5px;
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

.delete-button-container {
  margin: 2rem 0;
}

.delete-message {
  margin-top: 1rem;
  font-size: 1.25rem;
  color: #42b983;
}
</style>
