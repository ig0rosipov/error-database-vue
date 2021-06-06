<template>
  <section class="explorer">
    <h1 class="explorer__title">{{ title }}</h1>
    <p class="explorer__heading">Выберите оборудование</p>
    <select v-model="currentMachine" class="explorer__machines">
      <option v-for="machine in machines" :key="machine._id">
        {{ machine.name }}
      </option>
    </select>
    <ul class="explorer__results">
      <template v-for="item in data" :key="item._id">
        <li v-if="item.machine.name === currentMachine" class="explorer__note">
          <fault-card
            :name="item.heading"
            :description="item.description"
            :image="item.images[0]"
          />
          <!-- <info-field :heading="'Название ошибки'" :content="item.heading" />
          <info-field
            :heading="'Описание ошибки'"
            :content="item.description"
          />
          <info-field :heading="'Решение ошибки'" :content="item.solution" />
          <info-field
            v-if="item.images.length > 0"
            :heading="'Изображения'"
            :images="item.images"
          /> -->
        </li>
      </template>
    </ul>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import InfoField from './InfoField.vue';
import FaultCard from './FaultCard.vue';

export default defineComponent({
  name: 'ErrorExplorer',
  components: {
    InfoField,
    FaultCard,
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

<style>
.explorer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* max-width: 640px; */
  box-sizing: border-box;
  padding: 40px 0;
}

.explorer__title {
  margin: 0 0 20px;
  font-size: 64px;
  font-weight: 400;
  letter-spacing: 8px;
  text-align: center;
}

.explorer__heading {
  margin: 0 0 12px;
  font-size: 24px;
  font-weight: 400;
}

.explorer__machines {
  width: 100%;
  max-width: 640px;
  margin: 0 0 22px;
  box-sizing: border-box;
  padding: 7px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  background: #2e2e2e;
  border: none;
  outline: none;
  cursor: pointer;
}

.explorer__results {
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
  grid-auto-rows: 300px;
  justify-content: center;
  align-content: center;
  justify-items: stretch;
  align-items: stretch;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.explorer__note {
}
</style>
