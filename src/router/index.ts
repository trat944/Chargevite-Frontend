import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Tasks from '../views/Tasks.vue';
import TaskDetail from '../views/TaskDetail.vue';
import AddTask from '../views/AddTask.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks,
  },
  {
    path: '/tasks/:id',
    name: 'Task Detail',
    component: TaskDetail,
  },
  {
    path: '/add-task',
    name: 'Add Task',
    component: AddTask,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
