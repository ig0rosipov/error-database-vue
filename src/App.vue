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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: #3f3f3f;
  color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
}
</style>
