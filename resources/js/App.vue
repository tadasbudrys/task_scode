<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <router-link to="/Alltasks" class="nav-item nav-link">Tasks</router-link>
                    <router-link to="/Add" class="nav-item nav-link">Add Task</router-link>
                    <router-link to="/Login" class="nav-item nav-link">Login</router-link>
                </div>
            </div>
        </nav>
        <br/>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {}
</script>