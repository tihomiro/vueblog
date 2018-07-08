<template>
  <div class="container">
    <PostSnippet :posts="posts" />
  </div>
</template>

<script>
// @ is an alias to /src
import PostSnippet from '@/components/PostSnippet.vue';

import ApiService from '@/services/ApiService';

export default {
  components: {
    PostSnippet,
  },

  data() {
    return {
      posts: [],
    };
  },

  methods: {
    fetchPosts() {
      ApiService('posts')
        .then((response) => {
          this.posts = response.body.entries;
        });
    },
  },

  mounted() {
    this.fetchPosts();
  },
};
</script>
