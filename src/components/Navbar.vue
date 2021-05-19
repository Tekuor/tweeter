<template>
      <b-navbar centered>
        <template #brand >
            <b-navbar-item class="pl-6" tag="router-link" :to="{ path: '/' }">
                <img
                    src="@/assets/tweeter.svg"
                >
            </b-navbar-item>
        </template>
        <template #start >
            <b-navbar-item tag="router-link" :to="{ path: '/home' }" :class="{ active: currentRoute.includes('home') }" class="nav-text">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/explore' }" :class="{ active: currentRoute.includes('explore') }" style="margin-left: 50px" class="nav-text">
                Explore
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/bookmarks' }" :class="{ active: currentRoute.includes('bookmarks') }" style="margin-left: 50px" class="nav-text">
                Bookmarks
            </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item tag="div" class="pr-6">
                <div>
                    <span class="image-div mr-2">He</span>
                    <span class="name-text">Xanthe Neal</span>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    computed: {
        currentRoute(){
            console.log("hi", this.$route.name)
            return this.$route.name
        }
    }
}
</script>

<style>
.nav-text{
    font-weight: 500;
    font-size: 14px;
    color: #828282;
}

.image-div{
    width: 32px;
    height: 32px;
    background: #C4C4C4;
    border-radius: 8px;
}

.name-text{
    font-family: Noto Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: #333333;
}

.active {
  color: #2F80ED;
  border-bottom: 3px solid #2F80ED;
}
</style>