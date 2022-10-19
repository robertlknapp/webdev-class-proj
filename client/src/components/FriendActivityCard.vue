<script setup lang="ts">

</script>

<template>
    <div class="card m-4" style="max-width: 400px; min-width: 100px;">
        <div class="card-image">
            <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left fa-2x">
                    <font-awesome-icon icon="fa-solid fa-person-walking" />
                </div>
                <div class="media-content">
                    <p class="subtitle is-5">John Smith</p>
                    <p class="title is-5">Took a walk around campus today!</p>
                </div>
            </div>

            <div class="content">
                Other text here

                <br>

                <div class="tags mt-4 mb-0">
                    <span class="tag">Walking</span>
                </div>
                <time datetime="2016-1-1">11:09 AM - 1 Jan 2016</time>
            </div>
        </div>
    </div>
</template>