<template>
  <div class="profile">
    <ProfileComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileComponent from '@/components/Profile.vue'

export default {
  name: 'Profile',
  components: {
    ProfileComponent
  }
}
</script>
