<script setup lang="ts">

import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import LoginBadge from './LoginBadge.vue';

let isActive = ref(false);

</script>

<template>
<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
<div class="navbar-brand">
    <a :class="{ 'is-active': isActive }" @click="isActive = !isActive" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    </a>
</div>

<div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isActive }">
    <div class="navbar-start">
        <router-link to="/" class="navbar-item">
            <font-awesome-icon icon="fa-solid fa-person-walking" />
        </router-link>
      
        <router-link class="navbar-item" to="/statistics">
              Statistics
        </router-link>

        <router-link class="navbar-item" to="/addexercise">
              Update!
        </router-link>
        <router-link class="navbar-item" to="/friends">
              Friends
        </router-link>
    </div>

    <div class="navbar-end">
        <div class="navbar-item">
            <login-badge></login-badge>
        </div>
    </div>
</div>
</nav>

</template>

<style>
</style>