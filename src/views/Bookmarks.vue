<template>
  <div>
    <BookmarksComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import BookmarksComponent from '@/components/Bookmarks.vue'

export default {
  name: 'Bookmarks',
  components: {
    BookmarksComponent
  }
}
</script>