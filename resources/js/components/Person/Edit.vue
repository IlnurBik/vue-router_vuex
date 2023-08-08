<template>
    <div class="w-25" v-if="person">
        <div class="mt-2">
            <input class="form-control" v-model="person.name" type="text" placeholder="name">
        </div>
        <div class="mt-2">
            <input class="form-control" v-model="person.age" type="number" placeholder="age">
        </div>
        <div class="mt-2">
            <input class="form-control" v-model="person.job" type="text" placeholder="job">
        </div>
        <div class="mt-2">
            <input type="submit" @click.prevent="$store.dispatch('updatePerson', {id: person.id, name: person.name,
            age: person.age, job: person.job})" :disabled="!idDisabled"
                   value="Обновить"
                   class="btn btn-primary">
        </div>
    </div>
</template>

<script>
export default {
    name: "Edit",
    computed:{
        idDisabled(){
            return this.person.name && this.person.age && this.person.job;
        },
        person(){
            return this.$store.getters.person
        }
    },
    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id);
    },
}
</script>

<style scoped>

</style>
