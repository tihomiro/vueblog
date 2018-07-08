<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <h2>About</h2>
        <p v-html="about.about">{{about.about}}</p>
        <h2>Our Story</h2>
        <p v-html="about.our_story">{{about.our_story}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService';

export default {
  data() {
    return {
      about: {},
    };
  },

  methods: {
    fetchData() {
      ApiService('about/1')
        .then((response) => {
          this.about = response.body.entry;
        });
    },
  },

  mounted() {
    this.fetchData();
  },
};
</script>
