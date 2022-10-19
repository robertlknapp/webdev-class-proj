<script setup lang="ts">
  import FriendsList from '../components/FriendsList.vue'
  import FriendActivityCard from '../components/FriendActivityCard.vue'
</script>


<template>
  <div class="columns is-desktop">

    <div class="column has-background-light is-one-quarter-desktop pr-0">
      <FriendsList />
    </div>

    <div class="column">
      <div class="container mt-6 is-flex is-flex-wrap-wrap">
        <FriendActivityCard />
        <FriendActivityCard />
        <FriendActivityCard />
        <FriendActivityCard />
        <FriendActivityCard />
        <FriendActivityCard />
      </div> 
    </div>

  </div>

</template>