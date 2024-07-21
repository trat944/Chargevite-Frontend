<template>
  <div class="add-task-container">
    <section class="intro-section">
      <h1>Create a New Task</h1>
      <p>Fill out the form below to add a new task to your task manager. Please provide a title, description, and select the status of the task.</p>
    </section>

    <section class="form-section">
      <form @submit.prevent="submitTask">
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="title" required />
        </div>

        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" v-model="description" required></textarea>
        </div>

        <div class="form-group">
          <label for="status">Status:</label>
          <select id="status" v-model="status" required>
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <button type="submit" class="submit-button">Create Task</button>
      </form>

      <p v-if="confirmationMessage" class="confirmation-message">{{ confirmationMessage }}</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from '@/api/axios';
import { Task } from '@/interfaces/tasks.interface';

const title = ref('');
const description = ref('');
const status = ref('pending');
const confirmationMessage = ref('');

const submitTask = async () => {
  try {
    const newTask: Task = {
      title: title.value,
      description: description.value,
      status: status.value,
      createdAt: new Date().toISOString(),
      _id: ''
    };
    await axios.post('/tasks', newTask);
    confirmationMessage.value = 'The task has been created successfully!';
    
    title.value = '';
    description.value = '';
    status.value = 'pending';
  } catch (error) {
    console.error('Error creating task:', error);
  }
};
</script>

<style scoped>
.add-task-container {
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

.form-section {
  text-align: left;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #a5a3a3;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.submit-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #36a573;
}

.confirmation-message {
  margin-top: 1rem;
  font-size: 1.25rem;
  color: #42b983;
}
</style>
