<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card shadow-sm">
                    <div class="card-header">
                        <h3>Dashboard</h3>
                    </div>
                    <div class="card-body">
                        <p class="mb-0">You are logged in as <b>{{ user?.data?.name }}</b></p>
                        <p class="mb-0">You Detail is below<br/> <b>{{ userData }}</b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router'
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
