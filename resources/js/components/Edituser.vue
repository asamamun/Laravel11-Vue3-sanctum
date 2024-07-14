<template>
    <div>
      <router-link :to="{ name: 'allusers' }" class="btn btn-primary btn-sm mb-3">Back</router-link>
      <form class="mb-3" @submit.prevent="updateUser(user?.id)">
        <div class="form-group">
          <label for="name" class="font-weight-bold">Name</label>
          <input type="text" name="name" v-model="user.name" id="name" placeholder="Enter name" class="form-control" />
        </div>
        <div class="form-group">
          <label for="email" class="font-weight-bold">Email</label>
          <input type="email" name="email" v-model="user.email" id="email" placeholder="Enter Email" class="form-control" />
        </div>
        <div class="form-group">
          <label for="role" class="font-weight-bold">Role</label>
          <select name="role" v-model="user.role" id="role" class="form-control">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Update</button>
      </form>
    </div>
  </template>
  
  <script>
  import router from '@/router';
  import axiosInstance from '@/axios.js';
  
  export default {
    name: 'EditUser',
    data() {
      return {
        user: {},
        id: this.$route.params.id,
      };
    },
    mounted() {
      this.getUser();
    },
    methods: {
      async getUser() {
        try {
          const response = await axiosInstance.get(import.meta.env.VITE_APP_URL + `/api/users/${this.id}`);
          this.user = response.data;
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      },
      async updateUser(id) {
        try {
          await axiosInstance.put(import.meta.env.VITE_APP_URL + `/api/users/${id}`, this.user);
          router.push({ name: 'allusers' });
        } catch (error) {
          console.error('Error updating user:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  