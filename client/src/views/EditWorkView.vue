<script setup lang="ts">

    import { ref } from 'vue'
    import session from '../stores/session';
  
    let activeIndex = ref(0);;
    const isGoalActive = ref(true);

</script>


<template>

<div class="container is-flex">

  <div class="column is-one-quarter">
    <div class="panel is-primary">

      <div class="panel-heading has-background-primary-dark p-3 mb-1">Goals</div>

        <div class="panel-block">
          <div class="field has-addons">
            <div class="control has-icons-left">
                <input class="input is-primary" type="text" placeholder="New Goal" style="border-radius: 5px 0px 0px 5px;">
                <span class="icon is-left">
                    <i class="fas fa-calendar-plus"></i>
                </span>
              </div>
              <input class="button is-primary is-outlined" type="submit" value="Add" style="border-radius: 0px 5px 5px 0px;" @click="">
          </div>
        </div>
        <div class="panel-block" v-for="goal in session?.user?.goals">
            <input type="checkbox">
            {{ goal }}
        </div>

        <button class="button is-primary is-fullwidth" @click="">Submit</button>

    </div>
  </div>

    <div class="column is-half">
    <div class="panel is-primary">
        <div class="panel-heading has-background-primary-dark">Add Activity</div>
        <div class="tabs is-boxed has-background-primary-light">
            <ul>
                <li :class="{'is-active': activeIndex == 0}" @click="activeIndex = 0">
                    <a class="has-text-grey-dark">
                        <span class="icon is-small">
                            <i class="fas fa-clipboard-list"></i>
                        </span>
                        <span>Walk</span>
                    </a>
                </li>
                <li :class="{'is-active': activeIndex == 1}" @click="activeIndex = 1">
                    <a class="has-text-grey-dark">
                        <span class="icon is-small">
                            <i class="fas fa-calendar-times"></i>
                        </span>
                        <span>Run</span>
                    </a>
                </li>
                <li  :class="{'is-active': activeIndex == 2}" @click="activeIndex = 2">
                    <a class="has-text-grey-dark">
                        <span class="icon is-small">
                            <i class="fas fa-calendar-day"></i>
                        </span>
                        <span>Bike</span>
                    </a>
                </li>
                <li  :class="{'is-active': activeIndex == 3}" @click="activeIndex = 3">
                    <a class="has-text-grey-dark">
                        <span class="icon is-small">
                            <i class="fas fa-calendar"></i>
                        </span>
                        <span>Swim</span>
                    </a>
                </li>
                <li  :class="{'is-active': activeIndex == 4}" @click="activeIndex = 4">
                    <a class="has-text-grey-dark">
                        <span class="icon is-small">
                            <i class="fas fa-calendar"></i>
                        </span>
                        <span>Strength</span>
                    </a>
                </li>
                <li  :class="{'is-active': activeIndex == 5}" @click="activeIndex = 5">
                    <a class="has-text-grey-dark">
                        <span class="icon is-small">
                            <i class="fas fa-calendar"></i>
                        </span>
                        <span>Other Cardio</span>
                    </a>
                </li>
            </ul>
        </div>

        <div class="panel-block">
            <p class="control has-icons-left">
                <input class="input is-primary" type="text" placeholder="Title">
                <span class="icon is-left">
                    <font-awesome-icon icon="fa-solid fa-heading" />
                </span>
            </p>
        </div>

        <div class="panel-block">
            <p class="control has-icons-left">
                <input class="input is-primary has-text-grey" type="date" placeholder="Date">
                <span class="icon is-left">
                    <font-awesome-icon icon="fa-solid fa-calendar" />
                </span>
            </p>
        </div>

        <div class="panel-block">
            <p class="control has-icons-left">
                <input class="input is-primary has-text-grey" type="text" placeholder="Duration (in minutes)">
                <span class="icon is-left">
                    <font-awesome-icon icon="fa-solid fa-clock" />
                </span>
            </p>
        </div>

        <div class="panel-block">
            <p class="control has-icons-left">
                <input class="input is-primary has-text-grey" type="text" placeholder="Location">
                <span class="icon is-left">
                    <font-awesome-icon icon="fa-solid fa-location-pin" />
                </span>
            </p>
        </div>

        <div class="file has-name is-primary panel-block is-fullwidth">
            <label class="file-label">
                <input class="file-input" type="file" name="resume">
                <span class="file-cta">
                <span class="file-icon">
                    <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">
                    Choose a file???
                </span>
                </span>
                <span class="file-name">
                    Image Name
                </span>
            </label>
        </div>
        
        <button class="button is-primary is-fullwidth mt-4">
            Submit
        </button>

    </div>
  </div>
</div>
</template>

<style scoped>

input[type=checkbox] {
    accent-color: hsl(171, 100%, 29%);
}

</style>