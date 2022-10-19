import AdminViewVue from '@/views/AdminView.vue'
import EditWorkViewVue from '@/views/EditWorkView.vue'
import FriendsViewVue from '@/views/FriendsView.vue'
import WelcomeViewVue from '@/views/WelcomeView.vue'
import WorkStatsViewVue from '@/views/WorkStatsView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import RecentWorkViewVue from '../views/RecentWorkView.vue'
import session, {  } from '../stores/session'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeViewVue
    },
    {
      path: '/recentwork',
      name: 'recentwork',
      component: RecentWorkViewVue
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: WorkStatsViewVue
    },
    {
      path: '/addexercise',
      name: 'addexercise',
      component: EditWorkViewVue
    },
    {
      path: '/friends',
      name: 'friends',
      component: FriendsViewVue
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminViewVue
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'welcome' && session.user == null) {
    next({ name: 'welcome' });
  } else {
    next();
  }
});

export default router