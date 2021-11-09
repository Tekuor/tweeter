<template>
  <div class="profile h-full w-full">
    <ProfileComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileComponent from "@/components/Profile.vue";

export default {
  name: "Profile",
  components: {
    ProfileComponent,
  },
};
</script>
