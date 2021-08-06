import { createRouter, createWebHashHistory } from 'vue-router';
import FaultExplorer from '../components/FaultExplorer.vue';
import FaultCreator from '../components/FaultCreator.vue';
import { Machines, Data } from '../data/Data';
const routes = [
  {
    path: '/electrical',
    component: FaultExplorer,
    name: 'electrical-page',
    props: {
      data: Data.filter((item) => item.type === 'Electrical'),
      machines: Machines,
      title: 'Электрика',
    },
  },
  {
    path: '/mechanical',
    component: FaultExplorer,
    name: 'mechanical-page',
    props: {
      data: Data.filter((item) => item.type === 'Mechanical'),
      machines: Machines,
      title: 'Механика',
    },
  },
  {
    path: '/create',
    component: FaultCreator,
    name: 'create-note-page',
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
