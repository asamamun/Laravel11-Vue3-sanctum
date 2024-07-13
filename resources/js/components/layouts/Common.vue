<!-- Layout.vue -->
<template>
    <div>
      <Header />
      <Navbar />
      <Carousel />
      <main class="container mt-4">
        <slot></slot>
      </main>
      <footer class="bg-light text-center py-3 mt-4">
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  </template>
  
  <script>
import Header from './../Header.vue'
import Navbar from './../Navbar.vue';
import Carousel from '../Carousel.vue';

  
  export default {
    name: 'Layout',
    components: {
      Header,
      Navbar,
      Carousel
    }
  }
  </script>