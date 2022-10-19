<script setup lang="ts">

    import session, { login, logout, redirect, addFriend } from '../stores/session'

</script>

<template>
    
<div class="buttons" v-if="session.user == null">
    <a class="button is-primary">
        <strong>Sign up</strong>
    </a>
    <a class="button is-light" @click="login('Robert', 'Knapp'), redirect(true)">
        Log in
    </a>
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