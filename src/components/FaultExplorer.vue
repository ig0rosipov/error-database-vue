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
            :name="item.name"
            :description="item.description"
            :image="item.images[0]"
            @click="onCardClick(item)"
          />
        </li>
      </template>
    </ul>
  </section>
  <fault-popup
    :item="currentCard"
    :isPopupOpened="isPopupOpened"
    :setIsPopupOpened="setIsPopupOpened"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import FaultCard from './FaultCard.vue';
import FaultPopup from './FaultPopup.vue';
import { ErrorItem } from '../data/Data';

export default defineComponent({
  name: 'ErrorExplorer',
  components: {
    FaultCard,
    FaultPopup,
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
    const currentCard = ref<ErrorItem>({
      _id: 0,
      name: '',
      description: '',
      solution: '',
      images: [],
      type: 'Electrical',
      machine: {
        _id: 0,
        name: '',
      },
    });
    const isPopupOpened = ref<boolean>(false);
    const setIsPopupOpened = (isOpened: boolean): void => {
      isPopupOpened.value = isOpened;
    };
    const onCardClick = (card: ErrorItem): void => {
      currentCard.value = card;
      setIsPopupOpened(true);
    };
    return {
      currentMachine,
      currentCard,
      isPopupOpened,
      setIsPopupOpened,
      onCardClick,
    };
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
</style>
