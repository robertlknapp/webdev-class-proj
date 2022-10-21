<script setup lang="ts">

  import session, { allUsers } from '../stores/session';

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
        <tr v-for="user in allUsers">
          <th>{{ user.userID }}</th>
          <th>{{ user.firstName }}</th>
          <th>{{ user.lastName }}</th>
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