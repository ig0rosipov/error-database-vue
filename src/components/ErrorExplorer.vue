<template>
  <section class="explorer">
    <h1 class="explorer__title">{{ title }}</h1>
    <p class="explorer__heading">Выберите оборудование</p>
    <select v-model="currentMachine" class="explorer__machines">
      <option v-for="machine in machines" :key="machine._id">
        {{ machine.name }}
      </option>
    </select>
    <ul class="explorer__notes">
      <template v-for="item in data" :key="item._id">
        <li v-if="item.machine.name === currentMachine" class="explorer__note">
          <info-field :heading="'Название ошибки'" :content="item.heading" />
          <info-field
            :heading="'Описание ошибки'"
            :content="item.description"
          />
          <info-field :heading="'Решение ошибки'" :content="item.solution" />
          <info-field
            v-if="item.images.length > 0"
            :heading="'Изображения'"
            :images="item.images"
          />
        </li>
      </template>
    </ul>
  </section>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import InfoField from './InfoField.vue';

export default defineComponent({
  name: 'ErrorExplorer',
  components: {
    InfoField,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    machines: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const currentMachine = ref<string>(props.machines[0].name);
    return { currentMachine };
  },
});
</script>
<style></style>
