<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <h1>{{post.title}}</h1>
        <router-link :to="`authors/${post.authors.id}`" v-if="post.authors">{{post.authors.first_name}} {{post.authors.last_name}}</router-link>
        <p v-html="post.content">{{post.content}}</p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm" v-if="authorPosts.posts">
        There are {{authorPosts.posts.length}} posts from this author
        <ul>
          <li v-for="authorPost in authorPosts.posts">
            <router-link :to="`/posts/${authorPost.id}`">{{ authorPost.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService';

export default {
  data() {
    return {
      post: {},
      authorPosts: [],
    };
  },

  methods: {
    fetchPost() {
      ApiService(`posts/${this.$route.params.id}`)
        .then((response) => {
          this.post = response.body.entry;

          ApiService(`users/${response.body.entry.authors.id}`)
            .then((authorResponse) => {
              this.authorPosts = authorResponse.body.entry;
            });
        });
    },
  },

  mounted() {
    this.fetchPost();
  },

  watch: {
    $route(newEntry, oldEntry) {
      if (newEntry.params.id !== oldEntry.params.id) {
        this.fetchPost();
      }
    },
  },
};
</script>
