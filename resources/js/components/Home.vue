<!-- Home.vue -->
<template>
    <Layout>
      <div class="row">
        <div class="col-12">
          <h2>Welcome to Home</h2>
          <p>This is the content of your home page.</p>
        </div>
      </div>
    </Layout>
  </template>
  
  <script>
  import Layout from './layouts/Common.vue';
  
  export default {
    name: 'Home',
    components: {
      Layout
    },
    data(){
        return {
            user:[],
        }
    },
    mounted() {
        this.user = JSON.parse(localStorage.getItem('user'))
        console.log(this.user); 
    }
  }
  </script>

<!-- <template lang="">
    <div>       
       <Navbar/> 
        <h1>Home</h1>      
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'

export default {
    name:"home",
    data(){
        return {
            user:[],
        }
    },
    mounted() {
        this.user = JSON.parse(localStorage.getItem('user'))
        console.log(this.user); 
    },
    components: {
        Navbar
    }
}

</script>
<style lang="">
    
</style> -->