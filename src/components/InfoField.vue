<template>
  <div class="item">
    <p class="item__heading">{{ heading }}</p>
    <div v-if="content && !images" class="item__content">{{ content }}</div>
    <div v-else class="item__images">
      <img v-for="(image, index) in images" :key="index" :src="image" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InfoField',
  props: {
    heading: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: false,
    },
    images: {
      type: Array,
      required: false,
    },
  },
});
</script>
<style></style>
