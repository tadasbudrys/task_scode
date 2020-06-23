<template>
    <div>
        <h2>Login Page</h2>
        <form @submit="login">
            <div class="form-group">
                <input class="form-control" placeholder="Your email" type="email" v-model="email">
            </div>
            <div class="form-group">
                <input class="form-control" placeholder="Password" type="password" v-model="password">
            </div>
            <div class="form-group">
                <button class="btn btn-primary" type="submit">Login</button>
            </div>
        </form>
    </div>
</template>


<script>

    export default {
        data(){
            return {
                name: "LoginComponent",
                email : "",
                password : ""
            }
        },
        methods: {
            login: function () {
                const email = this.email
                const password = this.password
                this.$store.dispatch('login', { email, password }).then(() => this.$router.push('/'))
            }
        }
    }
</script>

<style scoped>

</style>