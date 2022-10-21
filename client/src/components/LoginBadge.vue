<script setup lang="ts">

    import session, { login, logout, redirect } from '../stores/session'
    import { ref } from 'vue';

    let dropDownView = ref(false);

</script>

<template>


<a class="navbar-item is-primary button" style="border-radius: 6px;"  v-if="session.user == null">
    Sign Up
</a>

<div class="navbar-item dropdown is-active" v-if="session.user == null">
    <a class="navbar-link dropdown-trigger" style="border-radius: 6px;" @click="dropDownView = !dropDownView">
        Log in
    </a>
    <div class="dropdown-menu">
        <div class="dropdown-content" v-if="dropDownView">
            <a class="dropdown-item" @click="login(1), redirect(true)">Robert Knapp</a>
            <a class="dropdown-item" @click="login(2), redirect(true)">John Smith</a>
            <a class="dropdown-item" @click="login(3), redirect(true)">Jane Doe</a>
        </div>
    </div>
</div>

<div v-else>
    logged in as {{session.user.firstName}} {{session.user.lastName}}
    (<a @click="logout(), redirect(false)">
        Log out
    </a>)
</div>

</template>


<style scoped>
</style>