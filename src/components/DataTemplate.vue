<template>
  <div class="template">
    <data-item :heading="'Название ошибки'" :content="name"></data-item>
    <data-item :heading="'Описание ошибки'" :content="description"></data-item>
    <data-item :heading="'Решение ошибки'" :content="solution"></data-item>
    <data-item
      v-if="image"
      :heading="'Изображение'"
      :content="name"
    ></data-item>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import DataItem from './DataItem.vue';
export default defineComponent({
  name: 'DataTemplate',
  components: {
    DataItem,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const { name, description, solution, image } = props.item;

    return {
      name,
      description,
      solution,
      image,
    };
  },
});
</script>
<style>
</style>