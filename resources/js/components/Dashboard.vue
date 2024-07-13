<template>
    <AdminLayout>
        <div class="container">
            <h3>Admin Dashboard testtesttest</h3>
            <p class="mb-0">You are logged in as <b>{{ user?.data?.name }}</b></p>
            <p class="mb-0">You Detail is below<br/> <b>{{ userData }}</b></p>
        </div>
    </AdminLayout>
</template>

<script>
import router from '@/router'
import AdminLayout from './layouts/Admin.vue';
export default {
    name:"dashboard",
    data(){
        return {
            user:[],
            userData:[]
        }
    },
    async mounted() {
        this.user = JSON.parse(localStorage.getItem('user'))
        console.log(this.user);
        if (!this.user) {
      router.push({ name: 'login' });
      return;
    }
        let token = this.user?.data.token;
        console.log(token)
        const authHeader = {
            'Authorization': 'Bearer ' + token,
            'X-REQUEST-TYPE': 'axios'
        }
        let config = {headers:authHeader}
        let url = '';
        if(this.user.role === 'admin'){
            url = import.meta.env.VITE_APP_URL+'/api/allusers'
        }
        else{
            url = import.meta.env.VITE_APP_URL+'/api/user'
        }
        console.log(url);
        await axios.get(url,config ).then(({data})=>{
            console.log(data);
                this.userData=data;
                router.push({name:'dashboard'})
            }).catch(({response})=>{
                if(response){
                    this.validationErrors = {}
                    alert(response?.data.message)
                }
            })
    }
}
</script>
