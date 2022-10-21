<script setup lang="ts">  

  import { ref } from 'vue';
  import session, {  } from '../stores/session'

  let isActive = ref(false);
  let varHeight = true;

  //extends the div holding the friend list to fit them, needed on mobile layout
  function toggleVarHeight() {
    if(!varHeight && session?.user?.friends) {
      varHeight = true;
      return (session.user.friends.length * 40) + 10;
    }
    else {
      varHeight = false;
      return -1;
    }
  }

</script>

<template>

  <div class="field has-addons columns m-0 has-background-white">
      <p class="control has-icons-left column p-0">
      <input class="input is-primary" type="text" placeholder="Search People" style="border-radius: 0px;">
      <span class="icon is-left">
          <font-awesome-icon icon="fa-user-group" />
      </span>
      </p>
      <div class="control has-icons-left column is-narrow is-narrow-mobile p-0">
          <input class="button is-primary is-outlined" type="submit" value="Add" style="border-radius: 0px;">
      </div>
  </div>

  <div class="dropdown is-active is-block" style="width: 100%;">
        <a :style="{ borderRadius: '0px', marginBottom: toggleVarHeight() + 'px' }" class="button is-primary-dark is-fullwidth" @click="isActive = !isActive">
          <span class="has-text-weight-bold">View Friends</span>
        </a>
      <div class="dropdown-menu p-0" style="width: 100%;" id="dropdown-menu" v-if="isActive">
          <a class="button is-fullwidth" v-for="friend in session?.user?.friends">
            <span>{{ friend.firstName }} {{ friend.lastName }}</span>
          </a>
      </div>
  </div>

</template>