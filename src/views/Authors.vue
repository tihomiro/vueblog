<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <h2>AUTHORS ({{authors.length}})</h2>
        <ul>
          <li v-for="author in authors">
            <router-link :to="`/authors/${author.id}`">{{author.first_name}} {{author.last_name}} ({{author.posts.length}} posts)</router-link>
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
      authors: [],
    };
  },

  methods: {
    fetchAuthors() {
      ApiService('users')
        .then((response) => {
          this.authors = response.body.entries;
        });
    },
  },

  mounted() {
    this.fetchAuthors();
  },
};
</script>
