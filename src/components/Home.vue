<template>
  <div class="flex flex-col items-center mt-8 w-full px-4 md:px-0">
    <div class="md:w-3/4 w-full">
      <div class="flex flex-row justify-center flex-wrap">
        <div class="flex flex-col lg:w-8/12">
          <div class="tweet-box" style="padding: 20px">
            <div class="tweet-heading">Tweet Something</div>
            <div class="flex flex-row pt-2">
              <div class="mr-2">
                <div><img class="tweet-image" src="../assets/dog1.jpg" /></div>
              </div>
              <div>
                <div class="tweet-message pt-2">What's happening?</div>
              </div>
            </div>

            <div class="flex flex-row flex-wrap w-full pt-8">
              <div class="reply pt-3 md:pl-6 w-1/2">
                <div class="flex flex-row">
                  <div>
                    <vue-fontawesome :icon="['far', 'image']" class="mr-2" />
                  </div>
                  <div>
                    <vue-fontawesome
                      :icon="['fas', 'globe-africa']"
                      class="mr-2"
                    />
                  </div>
                  <div>
                    <b-dropdown
                      :triggers="['hover', 'click']"
                      aria-role="list"
                      style="width: 234.37px;"
                    >
                      <template #trigger>
                        <a>Everyone can reply</a>
                      </template>

                      <div class="dropDownHeading px-2">Who can reply?</div>
                      <div class="dropDownDescription px-2">
                        Choose who can reply to this Tweet.
                      </div>
                      <b-dropdown-item
                        class="list-items ml-2 mt-2"
                        aria-role="listitem"
                        ><vue-fontawesome
                          :icon="['fas', 'globe-africa']"
                          class="mr-2"
                        />Everyone</b-dropdown-item
                      >
                      <b-dropdown-item
                        class="list-items ml-2"
                        aria-role="listitem"
                        ><vue-fontawesome
                          :icon="['fas', 'user-friends']"
                          class="mr-2"
                        />People you follow</b-dropdown-item
                      >
                    </b-dropdown>
                  </div>
                </div>
              </div>
              <div class="w-1/2 is-clickable">
                <div class="tweet-button float-right text-xs pt-2">Tweet</div>
              </div>
            </div>
          </div>
          <div class="w-full">
            <Post />
          </div>
        </div>

        <div class="flex flex-col w-full lg:w-4/12 lg:pl-8">
          <div class="menu" style="padding: 20px">
            <div class="tweet-heading">Trends for you</div>
            <div style="padding-top:20px">
              <Trend trend="#programming" tweets="213k Tweets" />
              <Trend class="pt-4" trend="#devchallenges" tweets="123k Tweets" />
              <Trend class="pt-4" trend="#frontend" tweets="34k Tweets" />
              <Trend class="pt-4" trend="#helsinki" tweets="11k Tweets" />
              <Trend class="pt-4" trend="#100DaysOfCode" tweets="5k Tweets" />
              <Trend class="pt-4" trend="#learntocode" tweets="1k Tweets" />
            </div>
          </div>

          <div class="follow mt-4" style="padding: 20px">
            <div class="tweet-heading">Who to follow</div>
            <Follower class="py-4" />
            <div class="follow-div"></div>

            <Follower class="pt-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Posts.vue";
import Trend from "./Trends.vue";
import Follower from "./SuggestedFollowers.vue";
export default {
  name: "HomeComponent",
  props: {},
  components: {
    Post,
    Trend,
    Follower,
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
.tweet-image {
  width: 40px;
  min-height: 40px;
  left: 532px;
  top: 553.9px;
  background: #c4c4c4;
  border-radius: 8px;
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

.tweet-box {
  min-height: 155.29px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  margin-bottom: 20px;
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

.menu {
  min-height: 475.7px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

.follow {
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

.reply {
  color: #2f80ed;
  font-size: 12px;
}
</style>
