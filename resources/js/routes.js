
import AllTasks from './components/AllTasks.vue';
import Login from './components/Login.vue';
import Edit from "./components/Edit";
import Addtask from "./components/Addtask.vue";

export const routes = [
    {
        name: 'AllTasks',
        path: '/AllTasks',
        component: AllTasks
    },
    {
        name: 'AddTask',
        path: '/add',
        component: Addtask
    },
    {
        name: 'Login',
        path: '/Login',
        component: Login
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: Edit
    },

];