<template>
  <form class="form">
    <select class="form__machines" v-model="FormData.machine.name">
      <option
        v-for="machine in Machines"
        :value="machine.name"
        :key="machine._id"
      >
        {{ machine.name }}
      </option>
    </select>

    <ul class="form__inputs">
      <li class="form__input">
        <label class="form__label">
          <p class="form__label-name">Название ошибки</p>
          <textarea
            class="form__textarea"
            @input="resize"
            rows="1"
            v-model="FormData.name"
          ></textarea>
        </label>
      </li>
      <li class="form__input">
        <label class="form__label">
          <p class="form__label-name">Описание ошибки</p>
          <textarea
            class="form__textarea"
            @input="resize"
            rows="1"
            v-model="FormData.description"
          ></textarea>
        </label>
      </li>
      <li class="form__input">
        <label class="form__label">
          <p class="form__label-name">Решение ошибки</p>
          <textarea
            class="form__textarea"
            @input="resize"
            rows="1"
            v-model="FormData.solution"
          ></textarea>
        </label>
      </li>
      <li class="form__input">
        <label class="form__label">
          <p class="form__label-name">Изображения</p>
          <image-uploader />
        </label>
      </li>
    </ul>
  </form>
</template>
<script lang="ts">
import { Machines, ErrorItem } from '../data/Data';
import { defineComponent, ref } from 'vue';
import ImageUploader from './ImageUploader.vue';
export default defineComponent({
  name: 'FaultForm',
  components: {
    ImageUploader,
  },
  setup() {
    const FormData = ref<ErrorItem>({
      _id: 0,
      name: '',
      description: '',
      solution: '',
      type: 'Electrical',
      images: [],
      machine: Machines[0],
    });

    const resize = (event: InputEvent) => {
      const textarea = event.target as HTMLTextAreaElement;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    };

    return {
      resize,
      Machines,
      FormData,
    };
  },
});
</script>
<style>
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.form__machines {
  width: 100%;
  max-width: 620px;
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

.form__inputs {
  width: 100%;
  max-width: 620px;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.form__input {
  width: 100%;
  background: #2f2f2f;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 20px;
}

.form__input:last-child {
  margin-bottom: 0;
}

.form__label {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.form__label-name {
  margin: 0 0 20px;
}

.form__textarea {
  width: 100%;
  background-color: #3f3f3f;
  border: none;
  resize: none;
  outline: none;
  color: white;
  min-height: auto;
  box-sizing: border-box;
  padding: 7px;
  font-size: 14px;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
}
</style>
