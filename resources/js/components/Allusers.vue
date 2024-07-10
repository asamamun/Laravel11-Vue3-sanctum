<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card shadow-sm">
                    <div class="card-header">
                        <h3>All Users</h3>
                    </div>
                    <div class="card-body">
                        <p class="mb-0">You are logged in as <b>{{ user?.data?.name }}</b></p>
                        <p class="mb-0">You Detail is below<br/> <b>{{ userData }}</b></p>
                    </div>
                </div>
            </div>
        </div>
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
</template>

<script>
import router from '@/router'
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
          /*   let token = this.user?.data.token;
            const authHeader = {
            'Authorization': 'Bearer ' + token,
            'X-REQUEST-TYPE': 'axios'
            }
            let config = {headers:authHeader}
            await axios.delete(import.meta.env.VITE_APP_URL+'/api/user/'+id,config).then(({data})=>{
                console.log(data);
                router.push({name:'dashboard'})
            }) */
        },

        async editUser(id) {
           // router.push({name:'edituser',params:{id:id}})
        },

        async viewUser(id) {
            //router.push({name:'viewuser',params:{id:id}})
        },

        async getUser() {
            this.user = JSON.parse(localStorage.getItem('user'));
        },
        async getUsers() {
            let token = this.user?.data.token;
            const authHeader = {
            'Authorization': 'Bearer ' + token,
            'X-REQUEST-TYPE': 'axios'
        }
        let config = {headers:authHeader}
            await axios.get(import.meta.env.VITE_APP_URL+'/api/allusers',config).then(({data})=>{
                console.log(data);
                this.users = data
            })
        }
    }
}

</script>
