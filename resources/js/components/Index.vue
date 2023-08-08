<template>
<div class="app">
    <router-link :to="{ name: 'person.index' }">Person </router-link>
    <router-link :to="{ name: 'person.create' }">Create </router-link>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style>
.app{
    padding: 20px;
}
</style>
