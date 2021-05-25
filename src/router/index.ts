import { createRouter, createWebHistory } from 'vue-router';
import ErrorExplorer from '../components/ErrorExplorer.vue';
import CreateNotePage from '../components/CreateNotePage.vue';
import { Machines, Data } from '../data/Data';
const routes = [
  {
    path: '/electrical',
    component: ErrorExplorer,
    name: 'electrical-page',
    props: {
      data: Data.filter((item) => item.type === 'electrical'),
      machines: Machines,
      title: 'Электрика',
    },
  },
  {
    path: '/mechanical',
    component: ErrorExplorer,
    name: 'mechanical-page',
    props: {
      data: Data.filter((item) => item.type === 'mechanical'),
      machines: Machines,
      title: 'Механика',
    },
  },
  {
    path: '/create',
    component: CreateNotePage,
    name: 'create-note-page',
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
