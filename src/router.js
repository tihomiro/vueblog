import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Authors from './views/Authors.vue';
import SinglePost from './views/SinglePost.vue';
import SingleAuthor from './views/SingleAuthor.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/post/:id',
      name: 'singlePost',
      component: SinglePost,
    },
    {
      path: '/authors',
      name: 'authors',
      component: Authors,
    },
    {
      path: '/authors/:id',
      name: 'singleAuthor',
      component: SingleAuthor,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
