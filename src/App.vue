<template>
    <nav>
        <router-link to="/">Article</router-link>
        |
        <router-link to="/tools">Tools</router-link>
        |
        <router-link to="/demos">Demos</router-link>
    </nav>
    <router-view/>
</template>

<style>
nav {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}


</style>
<script setup>
</script>