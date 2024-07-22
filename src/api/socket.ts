import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_API_URL); 

socket.on('connect', () => {
  console.log('Connected to WebSocket server');
});

socket.on('taskCreated', (task) => {
  console.log('New task created:', task);
  // Aquí puedes añadir lógica para actualizar el estado de la aplicación
});

socket.on('taskUpdated', (task) => {
  console.log('Task updated:', task);
  // Aquí puedes añadir lógica para actualizar el estado de la aplicación
});

socket.on('taskDeleted', (taskId) => {
  console.log('Task deleted:', taskId);
  // Aquí puedes añadir lógica para actualizar el estado de la aplicación
});

export default socket;
