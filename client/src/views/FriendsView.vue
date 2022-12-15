<script setup lang="ts">

  import session from '../stores/session';
  import type { user } from '../stores/users';
  import { getUser, getFriendsByUser, getUsersByName, getUsersByFirstName } from '../stores/users';
  import { computed, defineComponent, reactive, ref, watch, vue } from "vue";
  import type { post } from '../stores/posts';
  import { getAllPosts } from '../stores/posts';
  import vSelect from 'vue-select';

  vue.component('v-select', vSelect);

   // code needed for posts //
    const posts = ref([] as post[]);
    posts.value = await getAllPosts();
    let postsToSee = ref(session.user?.friends);
    let friendSelected = ref(-1);

    let postKey = ref([]);
    let el = ref([]);

    const currentPosterName = reactive([] as string[]);

    async function getPosterName(id: number, index: number) {
        const tempUser= ref();

        tempUser.value = await getUser(id);
        currentPosterName[index] = tempUser.value.firstname + " " + tempUser.value.lastname;
    };

  function setViewablePosts() {
    postsToSee.value = [friendSelected.value];
  };

  function resetViewablePosts() {
    postsToSee.value = session.user?.friends;
  };


  //code needed for friends //
  const isActive = ref(false);
  let varHeight = true;
  const notifVis = ref(false);

  const personName = ref("");
  const notification = ref("");
  const posNotif = ref(true);

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
  };

  const currentFriends = ref([] as user[]);
  if(session.user) {
    currentFriends.value = await getFriendsByUser(session.user.userId);
    console.log(currentFriends.value);
  };

  //searches for person to add as friend
  async function doesPersonExist() {
    console.log(currentPosterName);
    try {
      const newName = personName.value.split(" ");
      const newFirstName = newName[0];
      const newLastName= newName[1];

      
      const posFriends = ref([] as user[]);
      posFriends.value = await getUsersByName(personName.value).then(posFriends => {
        switch(posFriends.length) {
        case 0:
          console.log("No people");
          notification.value = "No people found with this name (it's case sensitive!)";
          posNotif.value = false;
          notifVis.value = true;
          break;
        case 1:
          console.log("One person");
          if(session.user?.friends.includes(posFriends[0].userId)) {
            console.log("Already friend");
            notification.value = "This person is already your friend!";
            posNotif.value = false;
            notifVis.value = true;
          } else if(session.user?.userId == posFriends[0].userId) {
            console.log("This is you");
            notification.value = "You're already your own friend!";
            posNotif.value = false;
            notifVis.value = true;
          } else {
            session.user?.friends.push(posFriends[0].userId);
            currentFriends.value.push(posFriends[0]);
            resetViewablePosts();
            notification.value = personName.value + " added!";
            posNotif.value = true;
            notifVis.value = true;
          };
          break;
        default:
          //code here
          break;
      }
      return posFriends;
      });
      posFriends.value = [];
      console.log(posFriends.value);
    } catch(e) {
      console.log("Error");
      notification.value = "Could not search. Try typing 'firstname lastname' format.";
      posNotif.value = false;
      notifVis.value = true;
    };
  };


  //Autocomplete code WIP//
    const userOptions = ref([] as user[]);

    async function getOptions(firstnameSearch: string) {
      userOptions.value = await getUsersByFirstName(firstnameSearch);
      return userOptions.value;
    };

</script>


<template>
  <div class="columns is-desktop">

    <div class="column has-background-light is-one-quarter-desktop pr-0">

        <div class="field has-addons columns m-0 has-background-white">
        <p class="control has-icons-left column p-0">
        <v-select class="input is-primary" type="text" placeholder="Search People" style="border-radius: 0px;" v-model="personName" @search="getOptions"></v-select>
        <span class="icon is-left">
            <font-awesome-icon icon="fa-user-group" />
        </span>
        </p>
        <div class="control has-icons-left column is-narrow is-narrow-mobile p-0">
            <input class="button is-primary is-outlined" type="submit" value="Add" style="border-radius: 0px;" @click="doesPersonExist()">
        </div>
    </div>
    <div class="notification m-0" :class="{ 'is-danger': !posNotif, 'is-success': posNotif }" v-if="notifVis">
          <button class="delete" @click="(notifVis = false)"></button>
          {{ notification }}
    </div>

    <div class="dropdown is-active is-block" style="width: 100%;">
          <a :style="{ borderRadius: '0px', marginBottom: toggleVarHeight() + 'px' }" class="button is-primary-dark is-fullwidth" @click="{isActive = !isActive; resetViewablePosts()}">
            <span class="has-text-weight-bold">View Friends</span>
          </a>
        <div class="dropdown-menu p-0" style="width: 100%;" id="dropdown-menu" v-if="isActive">
            <a class="button is-fullwidth" v-for="friend in currentFriends" @click="{ friendSelected = friend.userId; setViewablePosts(); }">
              <span>{{ friend.firstname }} {{ friend.lastname }}</span>
            </a>
        </div>
    </div>
    </div>

    <div class="column">
      <div class="container mt-6 is-flex is-flex-wrap-wrap">
        <div v-for="(thisPost, index) in posts" :key="thisPost.postId">
          <div class="card m-4" style="width: 400px;" v-if="postsToSee != null && postsToSee.includes(thisPost.posterId)">
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
                          <p style="display: none">{{ getPosterName(thisPost.posterId, index) }}</p>
                          <p class="subtitle is-5 mb-0">{{ currentPosterName[index] }}</p>
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
      </div> 
    </div>
  </div>
</template>