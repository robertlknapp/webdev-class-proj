<script setup lang="ts">
  import session from '../stores/session';
  import { getAllPosts, type post } from '../stores/posts';

  let myPosts: post[];
  let postNum: number;
  let goalNum: number;

  if(session.user) {
    myPosts = await (await getAllPosts());
    myPosts = myPosts.filter(post => post.posterId == session?.user?.userId);
    postNum = myPosts.length;
    goalNum = session.user.finishedGoals.length;
  };
</script>

<template>
    <div class="container">
      <div class="panel-heading has-background-primary-dark has-text-light p-3 mb-0 mt-4">Your Statistics</div>
      <div class="container has-background-light">
        <div class="is-size-5 pl-4 pt-4">Number of posts made 
          <div class="tag is-primary has-text-weight-semibold is-size-6">
            {{ postNum }}
          </div>
        </div>
        <div class="is-size-5 pl-4 pt-4 pb-4">Number of goals completed
          <div class="tag is-primary has-text-weight-semibold is-size-6">
            {{ goalNum }}
          </div>
        </div>
      </div>

      <div class="is-size-5 pl-4 pt-6">
          Previous goals completed:
          <div class="container pl-4">
            <div class="is-size-7" v-for="goal in session.user?.finishedGoals">
            - {{ goal }}
            </div>
          </div>
      </div>

    </div>
  </template>
  
  <style>
  </style>