<template>
  <b-navbar centered>
    <template #brand>
      <b-navbar-item class="pl-6" tag="router-link" :to="{ path: '/' }">
        <img src="@/assets/tweeter.svg" />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/home' }"
        :class="{ active: currentRoute.includes('home') }"
        class="nav-text"
      >
        Home
      </b-navbar-item>
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/explore' }"
        :class="{ active: currentRoute.includes('explore') }"
        class="nav-text lg:mx-8"
      >
        Explore
      </b-navbar-item>
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/bookmarks' }"
        :class="{ active: currentRoute.includes('bookmarks') }"
        class="nav-text"
      >
        Bookmarks
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <b-dropdown
          :triggers="['hover', 'click']"
          aria-role="list"
          style="width: 234.37px;"
        >
          <template #trigger>
            <div class="flex flex-row">
              <div class=" mr-2">
                <img class="image-div" src="../assets/dog1.jpg" />
              </div>
              <div class="name-text mt-2">Matekuor Mate-Kole</div>
              <div class="mt-1">
                <vue-fontawesome :icon="['fas', 'caret-down']" class="ml-2" />
              </div>
            </div>
          </template>

          <b-dropdown-item
            @click="goToProfile()"
            class="list-items ml-2 mt-2"
            aria-role="listitem"
            ><vue-fontawesome :icon="['fas', 'user-circle']" class="mr-2" />My
            Profile</b-dropdown-item
          >
          <b-dropdown-item class="list-items ml-2" aria-role="listitem"
            ><vue-fontawesome
              :icon="['fas', 'user-friends']"
              class="mr-2"
            />Group Chat</b-dropdown-item
          >
          <b-dropdown-item class="list-items ml-2" aria-role="listitem"
            ><vue-fontawesome
              :icon="['fas', 'cog']"
              class="mr-2"
            />Settings</b-dropdown-item
          >
          <hr class="dropdown-divider mx-2" />
          <b-dropdown-item
            style="color: #EB5757;"
            class="list-items ml-2"
            aria-role="listitem"
            ><vue-fontawesome
              :icon="['fas', 'sign-out-alt']"
              class="mr-2"
            />Logout</b-dropdown-item
          >
        </b-dropdown>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },
  methods: {
    goToProfile() {
      this.$router.push("/profile");
    },
  },
};
</script>

<style>
.nav-text {
  font-weight: 500;
  font-size: 14px;
  color: #828282;
}

.image-div {
  width: 32px;
  height: 32px;
  border-radius: 8px;
}

.name-text {
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  color: #333333;
}

.active {
  color: #2f80ed;
  border-bottom: 3px solid #2f80ed;
}

.list-items:hover {
  background: #f2f2f2;
  border-radius: 8px;
}
</style>
