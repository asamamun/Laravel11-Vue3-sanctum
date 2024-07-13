<!-- Layout.vue -->
<template>
    <div>
        <div class="row">
<h3>testtesttest</h3>
        </div>
      <main class="container mt-4">
        <slot></slot>
      </main>
      <footer class="bg-light text-center py-3 mt-4">
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  </template>
  
  <script>
 
  export default {
    name: 'AdminLayout',
    components: {
      
    }
  }
  </script>