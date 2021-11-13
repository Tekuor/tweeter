<template>
  <div class="w-full">
    <div class="retweet-text" v-if="showRetweet">
      <vue-fontawesome :icon="['fas', 'retweet']" class="mr-2" /> Daniel Jensen
      Retweeted
    </div>
    <div class="post-div w-full p-8 mb-4">
      <div class="columns">
        <div class="column is-1">
          <div class="tweet-image"></div>
        </div>
        <div class="column is-3">
          <div class="tweet-name">Peyton Lyons</div>
          <div class="tweet-date">24 August at 20:43</div>
        </div>
      </div>
      <div class="tweet">
        Traveling – it leaves you speechless, then turns you into a storyteller.
      </div>
      <div>
        <img
          class="w-full"
          src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        />
      </div>
      <div class="w-full flex flex-row justify-end pt-2">
        <div class="numbers-text">
          <span class="pr-2">449 Comments</span>
          <span class="pr-2">59k Retweets</span>
          <span>234 Saved</span>
        </div>
      </div>

      <div
        class="buttons-group flex flex-row justify-between md:pl-6 h-full"
        v-if="!isSmallScreen"
      >
        <div class="tweet-buttons pt-2 is-clickable flex flex-row">
          <vue-fontawesome
            :icon="['far', 'comment-alt']"
            class="md:mr-2 mt-1"
          />
          <p>Comments</p>
        </div>

        <div class="tweet-buttons pt-2 is-clickable flex flex-row">
          <vue-fontawesome :icon="['fas', 'retweet']" class="md:mr-2 mt-1" />
          <p>Retweets</p>
        </div>

        <div class="tweet-buttons pt-2 is-clickable flex flex-row">
          <vue-fontawesome :icon="['far', 'heart']" class="md:mr-2 mt-1" />
          <p>Likes</p>
        </div>

        <div class="tweet-buttons pt-2 is-clickable flex flex-row">
          <vue-fontawesome :icon="['far', 'bookmark']" class="md:mr-2 mt-1" />
          <p>Saved</p>
        </div>
      </div>

      <div
        class="buttons-group flex flex-row justify-between md:pl-6 h-full"
        v-else
      >
        <div class="tweet-buttons pt-2 is-clickable">
          <vue-fontawesome
            :icon="['far', 'comment-alt']"
            class="md:mr-2 mt-1"
          />
        </div>

        <div class="tweet-buttons pt-2 is-clickable">
          <vue-fontawesome :icon="['fas', 'retweet']" class="md:mr-2 mt-1" />
        </div>

        <div class="tweet-buttons pt-2 is-clickable">
          <vue-fontawesome :icon="['far', 'heart']" class="md:mr-2 mt-1" />
        </div>

        <div class="tweet-buttons pt-2 is-clickable">
          <vue-fontawesome :icon="['far', 'bookmark']" class="md:mr-2 mt-1" />
        </div>
      </div>

      <div class="columns">
        <div class="column is-1">
          <div class="tweet-image"></div>
        </div>

        <div class="column is-11">
          <b-field>
            <b-input
              placeholder="Tweet your reply"
              icon-pack="fas"
              icon-right="image"
            >
            </b-input>
          </b-field>
        </div>
      </div>
    </div>

    <div class="post-div w-full p-8 mb-4">
      <div class="columns">
        <div class="column is-1">
          <div class="tweet-image"></div>
        </div>
        <div class="column is-3">
          <div class="tweet-name">Mikael Stanley</div>
          <div class="tweet-date">24 August at 20:43</div>
        </div>
      </div>
      <div class="tweet">
        “We travel, some of us forever, to seek other places, other lives, other
        souls.” – Anais Nin
      </div>
      <div>
        <img
          class="w-full"
          src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        />
      </div>
      <div class="w-full flex flex-row justify-end pt-2">
        <div class="numbers-text">
          <span class="pr-2">449 Comments</span>
          <span class="pr-2">59k Retweets</span>
          <span>234 Saved</span>
        </div>
      </div>

      <div
        class="buttons-group flex flex-row justify-between md:pl-6 h-full"
        v-if="!isSmallScreen"
      >
        <div class="tweet-buttons pt-2 is-clickable flex flex-row">
          <vue-fontawesome
            :icon="['far', 'comment-alt']"
            class="md:mr-2 mt-1"
          />
          Comments
        </div>
        <div
          class="tweet-buttons pt-2 is-clickable flex flex-row"
          style="color: #27AE60"
        >
          <vue-fontawesome :icon="['fas', 'retweet']" class="md:mr-2 mt-1" />
          Retweets
        </div>
        <div
          class="tweet-buttons pt-2 is-clickable flex flex-row"
          style="color: #EB5757"
        >
          <vue-fontawesome :icon="['far', 'heart']" class="md:mr-2 mt-1" />
          Likes
        </div>
        <div
          class="tweet-buttons pt-2 is-clickable flex flex-row"
          style="color: #2D9CDB"
        >
          <vue-fontawesome :icon="['far', 'bookmark']" class="md:mr-2 mt-1" />
          Saved
        </div>
      </div>

      <div
        class="buttons-group flex flex-row justify-between md:pl-6 h-full"
        v-else
      >
        <div class="tweet-buttons pt-2 is-clickable">
          <vue-fontawesome
            :icon="['far', 'comment-alt']"
            class="md:mr-2 mt-1"
          />
        </div>

        <div class="tweet-buttons pt-2 is-clickable" style="color: #27AE60">
          <vue-fontawesome :icon="['fas', 'retweet']" class="md:mr-2 mt-1" />
        </div>

        <div class="tweet-buttons pt-2 is-clickable" style="color: #EB5757">
          <vue-fontawesome :icon="['far', 'heart']" class="md:mr-2 mt-1" />
        </div>

        <div class="tweet-buttons pt-2 is-clickable" style="color: #2D9CDB">
          <vue-fontawesome :icon="['far', 'bookmark']" class="md:mr-2 mt-1" />
        </div>
      </div>

      <div class="columns reply">
        <div class="column is-1">
          <div class="tweet-image"></div>
        </div>

        <div class="column is-11">
          <b-field>
            <b-input
              placeholder="Tweet your reply"
              icon-pack="fas"
              icon-right="image"
            >
            </b-input>
          </b-field>
        </div>
      </div>

      <div class="columns replies">
        <div class="column is-1">
          <div class="tweet-image"></div>
        </div>

        <div class="column is-11">
          <div class="reply-box">
            <div style="padding: 10px">
              <span class="tweet-name pr-2" style="font-size: 14px;"
                >Waqar Bloom</span
              >
              <span class="tweet-date">24 August at 20:43 </span>
            </div>
            <div class="tweet-message">
              I’ve seen awe-inspiring things that I thought I’d never be able to
              explain to another person.
            </div>
          </div>
          <div style="padding-top:2px">
            <span style="font-size: 12px;color: #BDBDBD;"
              ><vue-fontawesome :icon="['far', 'heart']" class="mr-2" /><span
                >Like</span
              >
              <span>. 12k Likes</span></span
            >
          </div>
        </div>
      </div>

      <div class="columns replies">
        <div class="column is-1">
          <div class="tweet-image"></div>
        </div>

        <div class="column is-11">
          <div class="reply-box">
            <div style="padding: 10px">
              <span class="tweet-name pr-2" style="font-size: 14px;"
                >Bianca Sosa</span
              >
              <span class="tweet-date">24 August at 20:43 </span>
            </div>
            <div class="tweet-message">
              I’ve felt this pull many times, like while road tripping through
              Morocco. Seeking out the vastness of the desert, and looking
              inward at the same time.
            </div>
          </div>
          <div style="padding-top:2px">
            <span style="font-size: 12px;color: #BDBDBD;"
              ><vue-fontawesome
                style="color: #EB5757"
                :icon="['far', 'heart']"
                class="mr-2"
              /><span style="color: #EB5757">Liked</span>
              <span>. 12k Likes</span></span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="post-div w-full p-8 mb-4">
      <div class="columns">
        <div class="column is-1">
          <div class="tweet-image"></div>
        </div>
        <div class="column is-3">
          <div class="tweet-name">Mikael Stanley</div>
          <div class="tweet-date">24 August at 20:43</div>
        </div>
      </div>
      <div class="tweet">
        “The gladdest moment in human life, methinks, is a departure into
        unknown lands.” – Sir Richard Burton
      </div>
      <div class="w-full flex flex-row justify-end pt-2">
        <div class="numbers-text">
          <span class="pr-2">449 Comments</span>
          <span class="pr-2">59k Retweets</span>
          <span>234 Saved</span>
        </div>
      </div>

      <div
        class="buttons-group flex flex-row justify-between md:pl-6 h-full"
        v-if="!isSmallScreen"
      >
        <div class="tweet-buttons pt-2 is-clickable flex flex-row">
          <vue-fontawesome
            :icon="['far', 'comment-alt']"
            class="md:mr-2 mt-1"
          />
          Comments
        </div>
        <div
          class="tweet-buttons pt-2 is-clickable flex flex-row"
          style="color: #27AE60"
        >
          <vue-fontawesome :icon="['fas', 'retweet']" class="md:mr-2 mt-1" />
          Retweets
        </div>
        <div
          class="tweet-buttons pt-2 is-clickable flex flex-row"
          style="color: #EB5757"
        >
          <vue-fontawesome :icon="['far', 'heart']" class="md:mr-2 mt-1" />
          Likes
        </div>
        <div
          class="tweet-buttons pt-2 is-clickable flex flex-row"
          style="color: #2D9CDB"
        >
          <vue-fontawesome :icon="['far', 'bookmark']" class="md:mr-2 mt-1" />
          Saved
        </div>
      </div>

      <div
        class="buttons-group flex flex-row justify-between md:pl-6 h-full"
        v-else
      >
        <div class="tweet-buttons pt-2 is-clickable">
          <vue-fontawesome
            :icon="['far', 'comment-alt']"
            class="md:mr-2 mt-1"
          />
        </div>

        <div class="tweet-buttons pt-2 is-clickable" style="color: #27AE60">
          <vue-fontawesome :icon="['fas', 'retweet']" class="md:mr-2 mt-1" />
        </div>

        <div class="tweet-buttons pt-2 is-clickable" style="color: #EB5757">
          <vue-fontawesome :icon="['far', 'heart']" class="md:mr-2 mt-1" />
        </div>

        <div class="tweet-buttons pt-2 is-clickable" style="color: #2D9CDB">
          <vue-fontawesome :icon="['far', 'bookmark']" class="md:mr-2 mt-1" />
        </div>
      </div>

      <div class="columns">
        <div class="column is-1">
          <div class="tweet-image"></div>
        </div>

        <div class="column is-11">
          <b-field>
            <b-input
              placeholder="Tweet your reply"
              icon-pack="fas"
              icon-right="image"
            >
            </b-input>
          </b-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showRetweet: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      screenWidth: "",
    };
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
    this.screenWidth = window.innerWidth;
  },
  methods: {
    myEventHandler() {
      this.screenWidth = window.innerWidth;
    },
  },
  computed: {
    isSmallScreen() {
      return this.screenWidth <= 600 ? true : false;
    },
  },
};
</script>

<style scoped>
.retweet-text {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #828282;
  padding-bottom: 10px;
}

.post-div {
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

.tweet-name {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.035em;
  color: #000000;
}

.tweet-date {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.035em;
  color: #bdbdbd;
}

.tweet {
  min-height: 22px;
  left: 532px;
  top: 614.9px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #4f4f4f;
}

.tweet-image-div {
  width: 705px;
  min-height: 328.22px;
  left: 532px;
  top: 655.9px;
  background-image: url("https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60");
  border-radius: 8px;
}

.numbers-text {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #bdbdbd;
}

.buttons-group {
  border: 1px solid #f2f2f2;
  border-left: 0;
  border-right: 0;
  margin-top: 35px;
  min-height: 61.17px;
}

.tweet-buttons:hover {
  background: #f2f2f2;
  border-radius: 8px;
}

.tweet-buttons {
  height: 41.17px;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #4f4f4f;
}

.reply {
  border: 1px solid #f2f2f2;
  border-left: 0;
  border-right: 0;
  border-top: 0;
}

.reply-box {
  min-height: 101.97px;
  left: 582.87px;
  top: 1863.17px;
  background: #fafafa;
  border-radius: 8px;
}

.tweet-message {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.035em;
  color: #4f4f4f;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
