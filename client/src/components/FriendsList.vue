<script setup lang="ts">  

  import { ref } from 'vue';
  import session, {  } from '../stores/session'

  let isActive = ref(false);
  let varHeight = -1;

  function toggleVarHeight() {
    if(varHeight == 0) {
      varHeight = session.user.friends.length * 25;
      return session.user.friends.length * 25;
    }
    else {
      varHeight = 0;
      return 0;
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

  <div class="dropdown is-active is-block">
        <a :style="{ borderRadius: '0px', marginBottom: toggleVarHeight() + 'px' }" class="button is-primary-dark is-fullwidth" @click="isActive = !isActive">
          <span>View Friends</span>
        </a>
      <div class="dropdown-menu" id="dropdown-menu" role="menu" v-if="isActive">

        <ul id="friendsList content">
          <li class="list-item ml-6" v-for="friend in session.user.friends">{{ friend.firstName }} {{ friend.lastName }}</li>
        </ul>
      </div>
    </div>

</template>