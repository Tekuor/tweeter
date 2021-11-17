<template>
  <div class="w-full">
    <div class="columns">
      <div class="column is-1">
        <div class="tweet-image"></div>
      </div>

      <div class="column is-11">
        <div class="columns">
          <div class="column is-7 ml-2">
            <div class="tweet-name">Mikael Stanley</div>
            <div class="tweet-date">24 August at 20:43</div>
          </div>

          <div class="column is-5">
            <div class="button is-pulled-right">
              <b-icon
                pack="fas"
                icon="user-plus"
                size="is-small"
                type="is-light"
                class="mr-2"
              ></b-icon>
              Follow
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="description" style="margin-top: -15px">
      Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰
    </div>

    <div
      class="tweet-image-div mt-2 w-full"
      v-bind:style="{
        'background-image':
          'url(https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60)',
      }"
    ></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tweet-image {
  width: 30px;
  height: 30px;
  background: #c4c4c4;
  border-radius: 8px;
}

.tweet-name {
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  color: #000000;
}

.tweet-date {
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  color: #bdbdbd;
}

.button {
  width: 75px;
  height: 24px;
  background: #2f80ed;
  border-radius: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  color: #ffffff;
}

.description {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #828282;
}

.tweet-image-div {
  min-height: 77.22px;
  border-radius: 8px;
  background-position: center;
  background-size: cover;
}
</style>
