<script setup lang="ts">

    import { createTempPost } from '@/stores/posts';
    import { reactive } from "vue";


    const thisPost = reactive({
        newpost: createTempPost(),
    });

</script>

<template>
    <div class="card m-4" style="width: 400px;">
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
                    <p class="subtitle is-5 mb-0">{{ thisPost.newpost?.poster?.firstName }} {{ thisPost.newpost?.poster?.lastName }}</p>
                    <p>{{ thisPost.newpost?.title }}</p>
                </div>
            </div>

            <div class="content">
                Other text here

                <br>

                <div class="tags mt-4 mb-0">
                    <span class="tag">Walking</span>
                </div>
                <time datetime="2016-1-1">{{ thisPost.newpost?.date?.toDateString() }}</time>
            </div>
        </div>
    </div>
</template>