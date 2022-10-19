<script setup lang="ts">
    import session, { login, logout} from '../stores/session'
</script>

<template>
         <div class = "hero is-primary" v-if="session.user != null">
            <span class = "hero-body subtitle is-1 is-italic">
               Welcome {{session.user.firstName}} !
            </span>
        </div>
</template>