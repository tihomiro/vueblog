<template>
  <div>
    <div class="row" v-for="post in posts">
      <div class="col-sm">
        <h2>
          <router-link :to="`posts/${post.id}`">{{ post.title }}</router-link>
        </h2>
        <p v-html="post.content">{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: Array,
  },
};
</script>
