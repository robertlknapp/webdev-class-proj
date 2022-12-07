<script setup lang="ts">
    import { getAllPosts } from '../stores/posts';
    import session from '../stores/session';
    import type { post } from '../stores/posts';

    let myPosts: post[];

    if(session.user) {
        myPosts = await (await getAllPosts());
        myPosts = myPosts.filter(post => post.posterId == session?.user?.userId);
    } else {
        myPosts = [];
    }


</script>

<template>

<div class="container p-0">
    <div class="panel-heading has-background-primary-dark has-text-light p-3 mb-1 mt-4">Your Recent Activity</div>
    <div class="card mb-4" style="width: 400px;" v-for="thisPost in myPosts">
    <div class="card-image">
        <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
    </div>
    <div class="card-content p-5">
        <div class="media">
            <div class="media-left fa-2x">
                <font-awesome-icon icon="fa-solid fa-person-walking" />
            </div>
            <div class="media-content">
                <p class="subtitle is-5 mb-0">{{ session.user?.firstname }} {{ session.user?.lastname }}</p>
                <p>{{ thisPost.title }}</p>
            </div>
        </div>

        <div class="content">
            {{ thisPost.duration }} minutes of {{ thisPost.activityType }} <i>@{{ thisPost.location }}</i>

            <br>

            <div class="tags mt-4 mb-0">
                <span class="tag">{{ thisPost.activityType }}</span>
                <span class="tag">{{ thisPost.location }}</span>
            </div>
            <div>{{ thisPost.date }}</div>
        </div>
    </div>
 </div>
</div>

</template>