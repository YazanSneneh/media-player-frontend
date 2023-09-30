<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <header>
        <nav>
            <ul>
                <li class="nav-link"><RouterLink to="/">Home</RouterLink></li>
                <li class="nav-link"><RouterLink to="/log">Log </RouterLink></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
header {
    background: #1A1A1A;
    line-height: 2.5;
    width: 100%;
    padding: 0.3em 0;
}

nav ul{
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-link {
    list-style-type: none;
}

.nav-link a {
    display: inline-block;
    margin: 0 15px;
    text-decoration: none;
}


</style>