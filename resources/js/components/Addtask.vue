<template>
    <div>
        <h3 class="text-center">Add Task</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addTask">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="task.title">
                    </div>
                    <div class="form-group">
                        <label>Author</label>
                        <input type="text" class="form-control" v-model="task.content">
                    </div>
                    <div class="form-group">
                        <label>Author</label>
                        <select class="form-control" v-model="task.status" >
                            <option > to do</option>
                            <option  >in progres</option>
                            <option  >finished</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Add Book</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                task: {}
            }
        },
        methods: {
            addTask() {

                this.axios
                    .post('http://localhost:8000/api/task/add', this.task)
                    .then(response => (
                        this.$router.push({name: 'AllTasks'})
                    ))
                    .catch(error => console.log(error))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>