import { createRouter, createWebHistory } from 'vue-router';
import Author from '../components/Author.vue';
import ElectricalPage from '../components/ElectricalPage.vue';
import MechanicalPage from '../components/MechanicalPage.vue';
import CreateNotePage from '../components/CreateNotePage.vue';
const routes = [
  {
    path: '/electrical',
    component: ElectricalPage,
    name: 'electrical-page',
  },
  {
    path: '/mechancial',
    component: MechanicalPage,
    name: 'mechanical-page',
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
