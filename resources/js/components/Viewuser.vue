<template lang="">
    <div>
        <router-link :to="{name:'allusers'}" class="btn btn-primary btn-sm mb-3">Back</router-link>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{user?.id}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{user?.name}}</h6>
                <p class="card-text">{{user?.email}}</p>
                <p class="card-text">{{user?.role}}</p>
                <p class="card-text">{{user?.created_at}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import axiosInstance from '@/axios.js';



export default {
    name:'viewuser',
    params:['id'],
    data(){
        return {
            user:[],
            id:this.$route.params.id
        }
    },
    mounted() {
        this.getUser()
    },
    methods: {
        getUser() {            
            axiosInstance.get(import.meta.env.VITE_APP_URL+'/api/users/'+this.id).then(({data})=>{
                console.log(data);
                this.user = data
            })
        }
    },
    
}
</script>
<style lang="">
    
</style>