<template>
    <AdminLayout>
    <div class="container">
        <hr>
        <table v-if="user.data.role == 'admin'" class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>role</th>
                    <th>Created at</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.role }}</td>
                    <td>{{ user.created_at }}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" @click="deleteUser(user.id)">Delete</button>
                        <button class="btn btn-primary btn-sm" @click="editUser(user.id)">Edit</button>
                        <button class="btn btn-success btn-sm" @click="viewUser(user.id)">View</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</AdminLayout>
</template>

<script>
import router from '@/router'
import AdminLayout from './layouts/Admin.vue';
import axiosInstance from '@/axios.js';
export default {
    name:"allusers",
    data() {
        return {
            users: [],
            user: null,
            userData: null
        }
    },
    created() {
        this.getUser()
        let role = this.user?.data.role;
        if(role === 'admin'){
            this.getUsers()  
        }
        
    },
    methods: {
        async deleteUser(id) {
            if (!confirm('Are you sure you want to delete this user?')) {
                return;
            }
            
            await axiosInstance.delete(import.meta.env.VITE_APP_URL+'/api/users/'+id).then((data)=>{
                console.log(data);
                // router.push({name:'allusers'})
                this.getUsers()
            })
        },

        async editUser(id) {
           router.push({name:'edituser',params:{id:id}})
        },

        async viewUser(id) {
            router.push({name:'viewuser',params:{id:id}})
        },

        async getUser() {
            this.user = JSON.parse(localStorage.getItem('user'));
        },
        async getUsers() {
            await axiosInstance.get(import.meta.env.VITE_APP_URL+'/api/allusers').then(({data})=>{
                console.log(data);
                this.users = data
            })
        }
    }
}

</script>
