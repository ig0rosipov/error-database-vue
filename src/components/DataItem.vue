<template>
  <div class="item">
    <p class="item__heading">{{ heading }}</p>
    <div v-if="content && !image" class="item__content">{{ content }}</div>
    <div v-else class="item__images">
      <!-- <img v-for="image in images" src="{{image}}" /> -->
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DataItem',
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
<style>
</style>