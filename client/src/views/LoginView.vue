<script setup lang="ts">

import { login } from '@/stores/session';
import { ref } from 'vue';
const email = ref('');
const password = ref('');
const name = ref('');

</script>

<template>
    <div>
        <form class="box" @submit.prevent="login(email)">
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                <input class="input" type="email" placeholder="e.g. name@domain.com" v-model="email">
                </div>
            </div>
            <button class="button is-primary">Sign in</button>
        </form>


    </div>
</template>


<style scoped>
</style>