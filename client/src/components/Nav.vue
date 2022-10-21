<script setup lang="ts">

import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import LoginBadge from './LoginBadge.vue';
import session from '../stores/session'

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

<div id="navbarMain" class="navbar-menu" :class="{ 'is-active': isActive }">
    <div class="navbar-start">
        <router-link to="/" class="navbar-item" style="border-radius: 30px 30px 0px 0px;">
            <span class="icon fa-xl is-large">
                <font-awesome-icon icon="fa-solid fa-person-walking" />
            </span>
        </router-link>
        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" v-if="session.user != null" style="padding-right: 60px; border-radius: 30px 30px 0px 0px;">
                My Activity
            </a>
            <div class="navbar-dropdown">
                <router-link class="navbar-item" to="/recentwork">
                    View Recent
                </router-link>
                <router-link class="navbar-item" to="/addexercise">
                    Add activity
                </router-link>
                <router-link class="navbar-item" to="/statistics">
                    My Statistics
                </router-link>
            <hr class="navbar-divider">
            <a class="navbar-item">
                Report an issue
            </a>
            </div>
        </div>
        <router-link class="navbar-item" to="/friends" v-if="session.user != null" style="border-radius: 30px 30px 0px 0px;">
            Friends
        </router-link>
        <router-link to="/admin" class="navbar-item" v-if="session.user?.admin == true"  style="border-radius: 30px 30px 0px 0px;">
            Admin Actions
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