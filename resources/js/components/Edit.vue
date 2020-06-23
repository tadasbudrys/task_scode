<template>
    <div>
        <h3 class="text-center">Edit task</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateTask">
                    <div class="form-group">
                        <label>title</label>
                        <input type="text" class="form-control" v-model="task.title">
                    </div>
                    <div class="form-group">
                        <label>content</label>
                        <input type="text" class="form-control" v-model="task.content">
                    </div>

                    <div class="form-group">
                        <label>status</label>
                        <select class="form-control" v-model="task.status" >
                            <option > to do</option>
                            <option  >in progres</option>
                            <option  >finished</option>
                        </select>
                    </div>

                    <button type="submit" class="btn btn-primary">Update task</button>
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
        created() {
            this.axios
                .get(`http://127.0.0.1:8000/api/task/edit/${this.$route.params.id}`)
                .then((response) => {
                    this.task = response.data;
                     console.log(response.data);
                });
        },
        methods: {
            updateTask() {
                this.axios
                    .post(`http://127.0.0.1:8000/api/task/update/${this.$route.params.id}`, this.task)
                    .then((response) => {
                        this.$router.push({name: 'AllTasks'});
                    });
            }
        }
    }
</script>