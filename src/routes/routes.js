import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'dataReport',
    component: DashboardLayout,
    children: [
      {
        path: '/dataReport',
        name: 'dataReport',
        component: () => import(/* webpackChunkName: "demo" */ '../views/WindPowerDataReport.vue')
      },
      {
        path: '/start',
        name: 'start',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Start.vue')
      },
      {
        path: '/realTimePre',
        name: 'realTimePre',
        component: () => import(/* webpackChunkName: "demo" */ '../views/RealTimePre.vue')
      },
      {
        path: '/historyData',
        name: 'historyData',
        component: () => import(/* webpackChunkName: "demo" */ '../views/HistoryData.vue')
      },
      {
        path: '/locationPre',
        name: 'locationPre',
        component: () => import(/* webpackChunkName: "demo" */ '../views/LocationPre.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
