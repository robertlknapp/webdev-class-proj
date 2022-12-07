<script setup lang="ts">

  import { ref } from 'vue';
  import { getAllUsers, type user } from '../stores/users';

  const users = ref([] as user[]);
  users.value = await getAllUsers();
  console.log(users.value);
  
</script>


<template>
  <div class="container">
    <table class="table mt-6">
      <thead>
        <tr>
          <th>User ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Is Admin</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <th>{{ user.userId }}</th>
          <th>{{ user.firstname }}</th>
          <th>{{ user.lastname }}</th>
          <th>{{ user.email}}</th>
          <th>{{ user.admin }}</th>
          <th>
            <button class="button">
              <font-awesome-icon icon="fa-solid fa-user-slash" />
            </button>
            <button class="button">
              <font-awesome-icon icon="fa-solid fa-user-pen" />
            </button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>