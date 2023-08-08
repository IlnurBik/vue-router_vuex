<template>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Job</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="person in people">
            <th scope="row">{{ person.id }}</th>
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.job }}</td>
            <td><router-link
                :to="{name: 'person.edit', params:{ id: person.id}}"><button class="btn btn-primary">Edit</button></router-link></td>
            <td><button @click="$store.dispatch('deletePerson',person.id)" class="btn btn-danger">Delete</button></td>
        </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "Index",
    mounted() {
        this.$store.dispatch('getPeople')
    },
    computed:{
        people(){
            return this.$store.getters.people
        }
    }
}
</script>

<style scoped>

</style>
