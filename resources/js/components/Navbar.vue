<template>
    <div>
        <nav>
            <div class="text-center">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <router-link :to="{name:'home'}" class="nav-link">Home</router-link>
                                </li>
                                
                                <li class="nav-item" v-if="!isLoggedIn">
                                    <router-link :to="{name:'login'}" class="nav-link">Login</router-link>
                                </li>
                                <li class="nav-item" v-if="!isLoggedIn">
                                    <router-link :to="{name:'register'}" class="nav-link">Register</router-link>
                                </li>
                                
                                <li class="nav-item" v-if="isLoggedIn">
                                    <router-link :to="{name:'dashboard'}" class="nav-link">Dashboard</router-link>
                                </li>
                                <li class="nav-item" v-if="isLoggedIn">
                                    <a href="#" @click.prevent="logout" class="nav-link">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </nav>  
    </div>
</template>

<script>
export default {
    name: 'navbar',
    data() {
        return {
            isLoggedIn: false
        }
    },
    mounted() {
        this.checkLoginStatus()
    },
    methods: {
        checkLoginStatus() {
            // Check if user is logged in
            // This is a placeholder - replace with your actual authentication logic
            const user = localStorage.getItem('user')
            this.isLoggedIn = !!user
        },
        logout() {
            // Implement logout logic here
            localStorage.removeItem('user')
            this.isLoggedIn = false
            // Redirect to home or login page
            this.$router.push({ name: 'home' })
        }
    }
}
</script>