import EditWorkViewVue from '@/views/EditWorkView.vue'
import FriendsViewVue from '@/views/FriendsView.vue'
import WorkStatsViewVue from '@/views/WorkStatsView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import RecentWorkViewVue from '../views/RecentWorkView.vue'
import HomeView from '../views/RecentWorkView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
  ]
})

export default router