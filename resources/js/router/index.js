import { createWebHistory, createRouter } from 'vue-router'


/* Guest Component */
const Home = () => import('@/components/Home.vue')
const Login = () => import('@/components/Login.vue')
const Register = () => import('@/components/Register.vue')
/* Guest Component */

/* Layouts */
const DahboardLayout = () => import('@/components/layouts/Default.vue')

/* Layouts */

/* Authenticated Component */
const Dashboard = () => import('@/components/Dashboard.vue')
const Allusers = () => import('@/components/Allusers.vue')
/* Authenticated Component */


const routes = [
    {
        name: "home",
        // path: import.meta.env.BASE_URL + "/login",
        // path: "/ROUND57/VUE/laravel-vue3/public/login",
        path: import.meta.env.VITE_APP_ROOT + "/",
        component: Home,
        meta: {
            middleware: "guest",
            title: `Home`
        }
    },
    {
        name: "login",
        // path: import.meta.env.BASE_URL + "/login",
        // path: "/ROUND57/VUE/laravel-vue3/public/login",
        path: import.meta.env.VITE_APP_ROOT + "/login",
        component: Login,
        meta: {
            middleware: "guest",
            title: `Login`
        }
    },
    {
        name: "register",
        // path: import.meta.env.BASE_URL + "/register",
        // path: "/ROUND57/VUE/laravel-vue3/public/register",
        path: import.meta.env.VITE_APP_ROOT + "/register",
        component: Register,
        meta: {
            middleware: "guest",
            title: `Register`
        }
    },
    {
        // path: "/ROUND57/VUE/laravel-vue3/public/dashboard",
        path: import.meta.env.VITE_APP_ROOT,
        component: DahboardLayout,
        meta: {
            middleware: "auth"
        },
        children: [
            {
                name: "dashboard",
                // path: '/ROUND57/VUE/laravel-vue3/public/dashboard',
                path: import.meta.env.VITE_APP_ROOT + "/dashboard",
                component: Dashboard,
                meta: {
                    title: `Dashboard`
                }
            },
            {
                name: "allusers",
                // path: '/ROUND57/VUE/laravel-vue3/public/dashboard',
                path: import.meta.env.VITE_APP_ROOT + "/allusers",
                component: Allusers,
                meta: {
                    title: `All Users`
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router
