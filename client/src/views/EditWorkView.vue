<template>

<div class="container is-flex">

  <div class="column is-one-quarter">
    <div class="panel">

      <div class="subtitle is-3 pt-4 pl-4">Goals</div>

        <div class="panel-block">
          <div class="field has-addons">
            <div class="control has-icons-left">
                <input class="input is-primary" type="text" placeholder="New Goal" style="border-radius: 5px 0px 0px 5px;">
                <span class="icon is-left">
                    <i class="fas fa-calendar-plus"></i>
                </span>
              </div>
              <input class="button is-primary is-outlined" type="submit" value="Add" style="border-radius: 0px 5px 5px 0px;">
          </div>
        </div>
        <div class="panel-block">
            <input type="checkbox" checked>
            Go on a walk twice
        </div>
        <div class="panel-block">
            <input type="checkbox">
            Go swimming
        </div>
        <div class="panel-block">
            <input type="checkbox">
            Include one strength exercise
        </div>

        <button class="button is-primary is-fullwidth">Submit</button>

    </div>
  </div>

  <div class="column is-half">
    <div class="panel">
      <div class="subtitle is-3 pt-4 pl-4">Add Activity</div>
      <div class="tabs is-boxed">
          <ul>
              <li class="is-active">
                  <a>
                      <span class="icon is-small">
                          <i class="fas fa-clipboard-list"></i>
                      </span>
                      <span>Walk</span>
                  </a>
              </li>
              <li>
                  <a>
                      <span class="icon is-small">
                          <i class="fas fa-calendar-times"></i>
                      </span>
                      <span>Run</span>
                  </a>
              </li>
              <li>
                  <a>
                      <span class="icon is-small">
                          <i class="fas fa-calendar-day"></i>
                      </span>
                      <span>Bike</span>
                  </a>
              </li>
              <li>
                  <a>
                      <span class="icon is-small">
                          <i class="fas fa-calendar"></i>
                      </span>
                      <span>Swim</span>
                  </a>
              </li>
              <li>
                  <a>
                      <span class="icon is-small">
                          <i class="fas fa-calendar"></i>
                      </span>
                      <span>Strength</span>
                  </a>
              </li>
              <li>
                  <a class="has-text-centered">
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
                  <i class="fas fa-calendar-plus"></i>
              </span>
          </p>
      </div>
      <div class="panel-block">
          Text here
      </div>
    </div>
  </div>
</div>
</template>