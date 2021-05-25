<template>
  <div class="template">
    <info-field :heading="'Название ошибки'" :content="name"></info-field>
    <info-field
      :heading="'Описание ошибки'"
      :content="description"
    ></info-field>
    <info-field :heading="'Решение ошибки'" :content="solution"></info-field>
    <info-field
      v-if="image"
      :heading="'Изображение'"
      :image="image"
    ></info-field>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import InfoField from './InfoField.vue';
export default defineComponent({
  name: 'DataTemplate',
  components: {
    InfoField,
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
<style></style>
