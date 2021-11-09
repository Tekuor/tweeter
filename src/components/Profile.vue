<template>
  <div class="h-full w-full">
    <div
      class="hero md:h-2/6 h-1/5"
      v-bind:style="{
        'background-image': 'url(' + require('../assets/beach.jpeg') + ')',
      }"
    ></div>
    <div class="flex flex-col items-center -mt-6 md:-mt-12 h-full">
      <div class="md:w-3/4 w-full h-full">
        <div class="panelPosition px-4">
          <div class="flex md:flex-row items-center flex-col">
            <div class="w-auto">
              <div class="profile-image -mt-16 md:-mt-24"></div>
            </div>

            <div
              class="flex flex-col md:ml-4 w-full md:w-6/12 mt-8 pb-10 text-center md:text-left"
            >
              <div class="flex md:flex-row flex-col">
                <div class="font-bold mr-4">Daniel Jensen</div>
                <div>
                  <span class="font-bold">2,569</span> Following
                  <span class="font-bold">10.8K</span> Followers
                </div>
              </div>
              <div class="mt-4">
                Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰
              </div>
            </div>
            <div class="w-6/12 md:-mt-16 pb-4 md:pb-0">
              <div
                style="margin: 0 auto"
                class="tweet-button pt-1 md:float-right"
              >
                Follow
              </div>
            </div>
          </div>
        </div>

        <div class="mt-14 flex md:flex-row flex-col">
          <div class="menu">
            <ul class="list-text">
              <li :class="{ activeMenu: activeMenu === 'tweets' }" class="mb-4">
                Tweets
              </li>
              <li
                :class="{ activeMenu: activeMenu === 'replies' }"
                class="pb-4"
              >
                Tweets & Replies
              </li>
              <li :class="{ activeMenu: activeMenu === 'media' }" class="pb-4">
                Media
              </li>
              <li :class="{ activeMenu: activeMenu === 'likes' }">Likes</li>
            </ul>
          </div>

          <div class="md:-mt-8 mt-8 md:pl-8" style="min-width: 77%;">
            <Post />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Posts.vue";
export default {
  name: "ProfileComponent",
  props: {},
  components: {
    Post,
  },
  data() {
    return {
      activeMenu: "tweets",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  padding-top: 25px;
  list-style-type: none;
}

li {
  padding-left: 15px;
  cursor: pointer;
}

.hero {
  background-size: 100%, 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.container-div {
  padding: 0 8rem;
}

.panelPosition {
  min-height: 160px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  min-width: 100%;
}

.profile-image {
  border-radius: 8px;
  width: 125px;
  min-height: 125px;
  background-color: #c4c4c4;
}

.profile-name {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #333333;
}

.numbers {
  font-weight: 600;
  font-size: 12px;
  color: #333333;
}

.description {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #828282;
}

.button {
  width: 101px;
  height: 32px;
  background: #2f80ed;
  border-radius: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #ffffff;
}

.menu {
  min-width: 23%;
  height: 180px;
  margin-top: -30px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

.list-text {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #828282;
}

.activeMenu {
  color: #2f80ed;
  border-left: 3px solid #2f80ed;
}

li:hover {
  color: #2f80ed;
}

.tweet-button {
  width: 81px;
  height: 32px;
  left: 827.21px;
  top: 205.58px;
  background: #2f80ed;
  border-radius: 4px;
  text-align: center;
  color: #ffffff;
}

@media screen and (max-width: 360px) {
  .container-div {
    padding: 0 2rem;
  }

  .panelPosition {
    position: relative;
    top: -30px;
    width: 300px;
    min-height: 163px;
  }

  .profile-image {
    border-radius: 8px;
    width: 100px;
    height: 100px;
    top: -40px;
  }
}
</style>
