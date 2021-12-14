<template>
  <div class="h-full w-full">
    <div
      class="hero md:h-2/6 h-1/5"
      v-bind:style="{
        'background-image': 'url(' + require('../assets/beach.jpeg') + ')',
      }"
    ></div>
    <div class="flex flex-col items-center -mt-6 md:-mt-12 h-full px-4 md:px-0">
      <div class="md:w-3/4 w-full h-full">
        <div class="panelPosition px-4">
          <div class="flex md:flex-row items-center flex-col">
            <div class="w-auto">
              <div class="profile-image -mt-16 md:-mt-24"></div>
            </div>

            <div
              class="flex flex-col md:ml-4 w-full md:w-6/12 mt-8 pb-10 text-center md:text-left"
            >
              <div class="flex md:flex-row flex-col items-center">
                <div class="font-bold mr-4 w-2/3">
                  Matekuor Mate-Kole
                </div>
                <div class="flex flex-row">
                  <div
                    class="mr-2 is-clickable"
                    @click="isComponentModalActive = true"
                  >
                    <span class="font-bold">2,569</span> Following
                  </div>
                  <div class="is-clickable">
                    <span class="font-bold">10.8K</span> Followers
                  </div>
                </div>
              </div>
              <div class="mt-4">
                Fullstack developer & baker based in Accra, Ghana
                <span>&#127468; &#127469;</span>
              </div>
            </div>
            <div class="w-6/12 md:-mt-16 pb-4 md:pb-0">
              <div
                style="margin: 0 auto"
                class="tweet-button md:float-right text-xs pt-1 is-clickable"
              >
                <b-icon
                  pack="fas"
                  icon="user-plus"
                  size="is-small"
                  type="is-light"
                  class="mr-1"
                ></b-icon>
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

    <b-modal v-model="isComponentModalActive" :width="640">
      <template>
        <div class="following-div p-4 w-full">
          <div class="flex flex-row">
            <div class="font-bold text-sm">Matekuor Mate-Kole is following</div>
          </div>

          <div class="w-full follower mt-2 pt-2">
            <div class="flex flex-row w-full">
              <div>
                <div class="tweet-image"></div>
              </div>
              <div class="flex flex-col ml-4 w-1/2">
                <div class="font-bold text-sm">Theodora</div>
                <div class="text-xs mt-1">120k followers</div>
              </div>
              <div class="text-xs w-1/2 is-clickable">
                <div class="p-1 tweet-button float-right">
                  Following
                </div>
              </div>
            </div>
            <p class="mt-4 text-xs font-light">Follow me on IG: @theody</p>
          </div>

          <div class="w-full follower mt-2 pt-2">
            <div class="flex flex-row w-full">
              <div>
                <div class="tweet-image"></div>
              </div>
              <div class="flex flex-col ml-4 w-1/2">
                <div class="font-bold text-sm">Harriet Mate-Kole</div>
                <div class="text-xs mt-1">120k followers</div>
              </div>
              <div class="text-xs w-1/2 is-clickable">
                <div class="p-1 tweet-button float-right">
                  <b-icon
                    pack="fas"
                    icon="user-plus"
                    size="is-small"
                    type="is-light"
                    class="mr-1"
                  ></b-icon>
                  Follow
                </div>
              </div>
            </div>
            <p class="mt-4 text-xs font-light">
              @hmm on Instagram **Over a decade as a lifestyle, adventure, and
              studio photographer. Traveling with my wife @travelfoodlove on
              instagram. PLEASE LINK ALL PHOTOS TO hmm.com -- not required but
              much appreciated!
            </p>
          </div>

          <div class="w-full follower mt-2 pt-2">
            <div class="flex flex-row w-full">
              <div>
                <div class="tweet-image"></div>
              </div>
              <div class="flex flex-col ml-4 w-1/2">
                <div class="font-bold text-sm">Clarisse Meyer</div>
                <div class="text-xs mt-1">120k followers</div>
              </div>
              <div class="text-xs w-1/2 is-clickable">
                <div class="p-1 tweet-button float-right">
                  <b-icon
                    pack="fas"
                    icon="user-plus"
                    size="is-small"
                    type="is-light"
                    class="mr-1"
                  ></b-icon>
                  Follow
                </div>
              </div>
            </div>
            <p class="mt-4 text-xs font-light">
              Photo | Video | Design - Southern California & Beyond Instagram:
              @clarissemeyer
            </p>
          </div>

          <div class="w-full follower mt-2 pt-2">
            <div class="flex flex-row w-full">
              <div>
                <div class="tweet-image"></div>
              </div>
              <div class="flex flex-col ml-4 w-1/2">
                <div class="font-bold text-sm">Oliur</div>
                <div class="text-xs mt-1">120k followers</div>
              </div>
              <div class="text-xs w-1/2 is-clickable">
                <div class="p-1 tweet-button float-right">
                  <b-icon
                    pack="fas"
                    icon="user-plus"
                    size="is-small"
                    type="is-light"
                    class="mr-1"
                  ></b-icon>
                  Follow
                </div>
              </div>
            </div>
            <p class="mt-4 text-xs font-light">
              I'm a designer and entrepreneur who enjoys taking pictures in my
              free time.
            </p>
          </div>
        </div>
      </template>
    </b-modal>
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
      isComponentModalActive: false,
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
  width: 86px;
  min-height: 27px;
  background: #2f80ed;
  border-radius: 4px;
  text-align: center;
  color: #ffffff;
}

.following-div {
  width: auto;
  min-height: 400px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

.tweet-image {
  width: 40px;
  height: 40px;
  left: 532px;
  top: 553.9px;
  background: #c4c4c4;
  border-radius: 8px;
}

.follower {
  border: 1px solid #f2f2f2;
  border-left: 0;
  border-right: 0;
  border-bottom: 0;
}
</style>
