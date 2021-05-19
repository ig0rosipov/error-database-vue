<template>
  <div class="main">
    <header-component></header-component>
    <router-view />
  </div>
</template>

<script lang="ts">
import './assets/styles/styles.css';
import HeaderComponent from './components/HeaderComponent.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
  },
});
</script>

<style>
.main {
  width: 100%;
  min-height: 100vh;
}
</style>
