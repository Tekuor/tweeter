<template>
  <div>
    <div class="retweet-text" v-if="showRetweet"><vue-fontawesome :icon="['fas', 'retweet']" class="mr-2"/> Daniel Jensen Retweeted</div>
    <div class="post-div" style="padding: 20px">
          <div class="columns">
            <div class="column is-1">
              <div class="tweet-image"></div>
            </div>
            <div class="column is-3">
              <div class="tweet-name">Peyton Lyons</div>
              <div class="tweet-date">24 August at 20:43 </div>
            </div>
          </div>
          <div class="tweet">Traveling – it leaves you speechless, then turns you into a storyteller.</div>
          <div class="tweet-image-div mt-4"></div>
          <div class="is-pulled-right pt-2">
            <div class="numbers-text">
              <span class="pr-2">449 Comments</span>
              <span class="pr-2">59k Retweets</span>
              <span>234 Saved</span>
            </div>
          </div>

          <div class="buttons-group columns pl-6">
            <span class="column is-3"><div class="tweet-buttons pt-2 is-clickable">
            <vue-fontawesome :icon="['far', 'comment-alt']" class="mr-2"/> Comments</div></span>
            <span class="column is-3"><div class="tweet-buttons pt-2 is-clickable">
              <vue-fontawesome :icon="['fas', 'retweet']" class="mr-2"/> Retweets</div></span>
            <span class="column is-3"><div class="tweet-buttons pt-2 is-clickable">            
            <vue-fontawesome :icon="['far', 'heart']" class="mr-2"/> Likes</div></span>
            <span class="column is-3"><div class="tweet-buttons pt-2 is-clickable">
              <vue-fontawesome :icon="['far', 'bookmark']" class="mr-2" /> Saved</div></span>
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
                    icon-right="image">
                </b-input>
              </b-field>
            </div>
          </div>
        </div>

        <div class="post-div mt-6" style="padding: 20px">
          <div class="columns">
            <div class="column is-1">
              <div class="tweet-image"></div>
            </div>
            <div class="column is-3">
              <div class="tweet-name">Mikael Stanley</div>
              <div class="tweet-date">24 August at 20:43</div>
            </div>
          </div>
          <div class="tweet">“We travel, some of us forever, to seek other places, other lives, other souls.” – Anais Nin</div>
          <div class="tweet-image-div mt-6"></div>
          <div class="is-pulled-right pt-2">
            <div class="numbers-text">
              <span class="pr-2">449 Comments</span>
              <span class="pr-2">59k Retweets</span>
              <span>234 Saved</span>
            </div>
          </div>

          <div class="buttons-group columns pl-6">
            <span class="column is-3"><div class="tweet-buttons pt-2 is-clickable">
            <vue-fontawesome :icon="['far', 'comment-alt']" class="mr-2"/> Comments</div></span>
            <span class="column is-3"><div class="tweet-buttons pt-2 is-clickable" style="color: #27AE60">
              <vue-fontawesome :icon="['fas', 'retweet']" class="mr-2"/> Retweets</div></span>
            <span class="column is-3"><div class="tweet-buttons pt-2 is-clickable" style="color: #EB5757">            
            <vue-fontawesome :icon="['far', 'heart']" class="mr-2"/> Likes</div></span>
            <span class="column is-3"><div class="tweet-buttons pt-2 is-clickable" style="color: #2D9CDB">
              <vue-fontawesome :icon="['far', 'bookmark']" class="mr-2" /> Saved</div></span>
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
                    icon-right="image">
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
                  <span class="tweet-name pr-2" style="font-size: 14px;">Waqar Bloom</span>
                  <span class="tweet-date">24 August at 20:43 </span>
                </div>
                <div class="tweet-message">I’ve seen awe-inspiring things that I thought I’d never be able to explain to another person.</div>
              </div>
              <div style="padding-top:2px">
                <span style="font-size: 12px;color: #BDBDBD;"><vue-fontawesome :icon="['far', 'heart']" class="mr-2"/><span>Like</span>  <span>. 12k Likes</span></span>
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
                  <span class="tweet-name pr-2" style="font-size: 14px;">Bianca Sosa</span>
                  <span class="tweet-date">24 August at 20:43 </span>
                </div>
                <div class="tweet-message">I’ve felt this pull many times, like while road tripping through Morocco. Seeking out the vastness of the desert, and looking inward at the same time.</div>
              </div>
              <div style="padding-top:2px">
                <span style="font-size: 12px;color: #BDBDBD;"><vue-fontawesome style="color: #EB5757" :icon="['far', 'heart']" class="mr-2"/><span style="color: #EB5757">Liked</span>  <span>. 12k Likes</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="post-div mt-6" style="padding: 20px">
          <div class="columns">
            <div class="column is-1">
              <div class="tweet-image"></div>
            </div>
            <div class="column is-3">
              <div class="tweet-name">Mikael Stanley</div>
              <div class="tweet-date">24 August at 20:43 </div>
            </div>
          </div>
          <div class="tweet">“The gladdest moment in human life, methinks, is a departure into unknown lands.” – Sir Richard Burton</div>
          <div class="is-pulled-right pt-2">
            <div class="numbers-text">
              <span class="pr-2">449 Comments</span>
              <span class="pr-2">59k Retweets</span>
              <span>234 Saved</span>
            </div>
          </div>

          <div class="buttons-group columns pl-6">
            <span class="column is-3"><div class="tweet-buttons pt-2 is-clickable">
            <vue-fontawesome :icon="['far', 'comment-alt']" class="mr-2"/> Comments</div></span>
            <span class="column is-3"><div class="tweet-buttons pt-2 is-clickable" style="color: #27AE60">
              <vue-fontawesome :icon="['fas', 'retweet']" class="mr-2"/> Retweets</div></span>
            <span class="column is-3"><div class="tweet-buttons pt-2 is-clickable" style="color: #EB5757">            
            <vue-fontawesome :icon="['far', 'heart']" class="mr-2"/> Likes</div></span>
            <span class="column is-3"><div class="tweet-buttons pt-2 is-clickable" style="color: #2D9CDB">
              <vue-fontawesome :icon="['far', 'bookmark']" class="mr-2" /> Saved</div></span>
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
                    icon-right="image">
                </b-input>
              </b-field>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  props:{
    showRetweet:{
      type: Boolean,
      default: true
    }
  }

}
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
  width: 745px;
  min-height: 200px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}
.tweet-image {
  width: 40px;
  height: 40px;
  left: 532px;
  top: 553.9px;
  background: #C4C4C4;
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
  color: #BDBDBD;
}

.tweet {
  width: 544.15px;
  min-height: 22px;
  left: 532px;
  top: 614.9px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #4F4F4F;
}

.tweet-image-div {
  width: 705px;
  height: 328.22px;
  left: 532px;
  top: 655.9px;
  background-image: url('https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60');
  border-radius: 8px;
}

.numbers-text {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #BDBDBD;
}

.buttons-group {
  border: 1px solid #F2F2F2;
  border-left: 0;
  border-right: 0;
  margin-top: 35px;
  height: 61.17px;
}

.tweet-buttons:hover {
  background: #F2F2F2;
  border-radius: 8px;
}

.tweet-buttons {
  height: 41.17px;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #4F4F4F;
}

.reply {
  border: 1px solid #F2F2F2;
  border-left: 0;
  border-right: 0;
  border-top: 0;
}

.reply-box {
  min-height: 101.97px;
  left: 582.87px;
  top: 1863.17px;
  background: #FAFAFA;
  border-radius: 8px;
}

.tweet-message {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.035em;
  color: #4F4F4F;
  padding-left: 10px;
  padding-right: 10px;
}
</style>