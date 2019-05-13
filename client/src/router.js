import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/views/HomeView';
import GameView from '@/views/GameView';

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path:'',
      name: 'home',
      component: HomeView
    },
    {
      path: '/game',
      name: 'gameview',
      component: GameView,
      props: true
    }
  ]
});
