<template>
  <div class="flex flex-col items-center mt-8 w-full px-4 md:px-0">
    <div class="lg:w-3/4 w-full">
      <div class="flex flex-row justify-center flex-wrap w-full">
        <div class="lg:w-3/12 w-full lg:mb-0 mb-8">
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
        </div>

        <div class="lg:pl-8 lg:w-9/12">
          <Post :showRetweet="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Posts.vue";
export default {
  name: "HomeComponent",
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

.menu {
  min-height: 179.01px;
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

.tweet-image {
  width: 40px;
  height: 40px;
  left: 532px;
  top: 553.9px;
  background: #c4c4c4;
  border-radius: 8px;
}

.search-button {
  width: 81px;
  height: 32px;
  background: #2f80ed;
  border-radius: 4px;
  text-align: center;
  color: #ffffff;
  font-weight: 500;
  font-size: 12px;
}

.tweet-message {
  font-weight: 500;
  font-size: 16px;
  color: #bdbdbd;
}

.tweet-heading {
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: #4f4f4f;
  border: 1px solid #e0e0e0;
  border-left: 0;
  border-right: 0;
  border-top: 0;
}

ul {
  padding-top: 25px;
  list-style-type: none;
}

li {
  padding-left: 15px;
  cursor: pointer;
}

.container-div {
  margin-top: 30px;
  padding: 0 8rem;
}

.search-box {
  width: 745px;
  height: 54px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

.profile-image {
  border-radius: 8px;
  width: 125px;
  height: 125px;
  background-color: #c4c4c4;
  position: relative;
  top: -60px;
  z-index: 3;
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

.follow {
  width: 240px;
  height: 517.7px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

.dropDownHeading {
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: #4f4f4f;
}

.dropDownDescription {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #828282;
}

.list-items:hover {
  width: 209.94px;
  height: 39.15px;
  background: #f2f2f2;
  border-radius: 8px;
}

.follow-div {
  border: 1px solid #e0e0e0;
  border-left: 0;
  border-right: 0;
  border-top: 0;
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
