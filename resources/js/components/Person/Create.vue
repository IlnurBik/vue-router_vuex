<template>
    <div class="w-25">
        <div class="mt-2">
            <input class="form-control" v-model="name" type="text" placeholder="name">
        </div>
        <div class="mt-2">
            <input class="form-control" v-model="age" type="number" placeholder="age">
        </div>
        <div class="mt-2">
            <input class="form-control" v-model="job" type="text" placeholder="job">
        </div>
        <div class="mt-2">
            <input type="submit" @click.prevent="$store.dispatch('createPerson', {name: name, age: age, job: job})"
                   :disabled="!idDisabled"
                   value="Создать"
                   class="btn btn-primary">
        </div>
    </div>
</template>

<script>
export default {
    name: "Create",
    data(){
        return{
            name: null,
            age: null,
            job: null,
        }
    },
    computed:{
        idDisabled(){
            return this.name && this.age && this.job;
        }
    }

}
</script>

<style scoped>

</style>
