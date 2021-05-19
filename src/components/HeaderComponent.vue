<template>
  <header class="header">
    <router-link to="/" class="header__logo"></router-link>
    <ul class="header__links">
      <router-link
        class="header__link"
        v-for="(link, index) in links"
        :to="link.url"
        :key="index"
        >{{ link.name }}</router-link
      >
    </ul>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

interface Link {
  name: string;
  url: string;
}

type Links = Link[];

export default defineComponent({
  name: 'HeaderComponent',

  setup() {
    const links: Links = [
      {
        name: 'Механика',
        url: '/mechanical',
      },
      {
        name: 'Электрика',
        url: '/electrical',
      },
      {
        name: 'Создание',
        url: '/create',
      },
    ];

    return {
      links,
    };
  },
});
</script>
<style>
.header {
  background: #2f2f2f;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 16px;
}

.header__logo {
  background: url(../assets/images/logo.svg);
  width: 36px;
  height: 36px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.header__links {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__link {
  color: white;
  text-decoration: none;
  font-weight: 600;
}
</style>
