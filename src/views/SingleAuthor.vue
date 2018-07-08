<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <h1>{{author.first_name}} {{author.last_name}}</h1>
        <p v-if="author.profile_image"><img :src="author.profile_image.file_url"></p>
        <p>Email: <a :href="`mailto:${author.email}`">{{author.email}}</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService';

export default {
  data() {
    return {
      author: {},
      morePosts: [],
    };
  },

  methods: {
    fetchData() {
      ApiService(`users/${this.$route.params.id}`)
        .then((response) => {
          this.author = response.body.entry;
        });
    },
  },

  mounted() {
    this.fetchData();
  },

  watch: {
    $route(newEntry, oldEntry) {
      if (newEntry.params.id !== oldEntry.params.id) {
        this.fetchData();
      }
    },
  },
};
</script>
