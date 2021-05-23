<template>
  <div>
    <section class="hero is-medium is-primary">
      <div class="hero-body">
      </div>
    </section>
  <div class="container-div">
    <div class="panelPosition">
      <div class="columns">
        <div class="column is-2">
        <div class="profile-image ml-4">
          
        </div>
        </div>
        <div class="column is-6">
          <span class="profile-name">Daniel Jensen</span>
          <span class="pl-4 numbers"><span>2,569</span> Following <span class="numbers pl-2">10.8K</span> Followers</span>
          <div class="description pt-4">
            Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰
          </div>
        </div>
        <div class="column is-4 ">
          <div class="button is-pulled-right mr-6">
            <b-icon
            pack="fas"
            icon="user-plus"
            size="is-small"
            type="is-light"
            class="mr-2"
            ></b-icon>            
            Follow</div>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-3">
        <div class="menu">
          <ul class="list-text">
            <li :class="{'activeMenu': activeMenu === 'tweets'}" class="mb-4">Tweets</li>
            <li :class="{'activeMenu': activeMenu === 'replies'}" class="pb-4">Tweets & Replies</li>
            <li :class="{'activeMenu': activeMenu === 'media'}" class="pb-4">Media</li>
            <li :class="{'activeMenu': activeMenu === 'likes'}">Likes</li>
          </ul>
        </div>
      </div>
      <div class="column is-8" style="margin-top: -30px">
        <Post />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Post from "./Posts.vue";
export default {
  name: 'ProfileComponent',
  props: {
  },
  components:{
    Post
  },
  data(){
    return{
      activeMenu:"tweets"
    }
  }
}
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

.hero{
  background-image: url('../assets/beach.jpeg');
  background-size: 100%, 100%;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
}

.container-div{
  padding:0 8rem; 
}

.panelPosition {
  position: relative;
  top: -60px;
  z-index: 2;
  width: 100%;
  min-height: 165px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
}

.profile-image{
  border-radius: 8px;
  width: 125px;
  height: 125px;
  background-color: #C4C4C4;
  position: relative;
  top: -60px;
  z-index: 3;
}

.profile-name{
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #333333;
}

.numbers{
  font-weight: 600;
  font-size: 12px;
  color: #333333;
}

.description{
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #828282;
}

.button{
  width: 101px;
  height: 32px;
  background: #2F80ED;
  border-radius: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #FFFFFF;
}

.menu {
  width: 240px;
  height: 180px;
  margin-top: -30px;
  background: #FFFFFF;
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
  color: #2F80ED;
  border-left: 3px solid #2F80ED;
}

li:hover {
  color: #2F80ED;
}

@media screen and (max-width: 360px) {
  .container-div{
    padding:0 2rem; 
  }

  .panelPosition {
    position: relative;
    top: -30px;
    width: 300px;
    min-height: 163px;
  }

  .profile-image{
    border-radius: 8px;
    width: 100px;
    height: 100px;
    top: -40px;
  }
}
</style>
