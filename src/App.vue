<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import './assets/styles/layout.css';
</script>

<template>
  <div class="app-background">
    <div class="app-screen">
      <Header />
      <RouterView />
    </div>
  </div>
</template>

 
