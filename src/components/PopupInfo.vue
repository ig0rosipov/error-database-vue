<template>
  <div class="info">
    <button
      class="info__close-button"
      @click="setIsPopupOpened(false)"
    ></button>
    <div class="info__fault">
      <h2 class="info__name">{{ name }}</h2>

      <div class="info__field">
        <h3 class="info__heading">Описание</h3>
        <p class="info__content">{{ description }}</p>
      </div>
      <div class="info__field">
        <h3 class="info__heading">Решение</h3>
        <p class="info__content">{{ solution }}</p>
      </div>
      <div v-if="images.length > 0" class="info__field">
        <h3 class="info__heading">Изображения</h3>
        <image-gallery :images="images" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ImageGallery from './ImageGallery.vue';

export default defineComponent({
  name: 'PopupInfo',
  components: { ImageGallery },
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    solution: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
      default: [],
    },
    setIsPopupOpened: {
      type: Function,
      required: true,
    },
  },
});
</script>

<style scoped>
.info {
  position: relative;
  width: 100%;
  max-width: 900px;
}

.info__fault {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  max-height: calc(100vh - 100px);
  width: 100%;
  background: #3f3f3f;
  box-sizing: border-box;
  padding: 60px;
  overflow-y: scroll;
  scrollbar-width: thick;
  border-radius: 10px;
}

.info__fault::-webkit-scrollbar {
  width: 15px;
  box-sizing: border-box;
  padding: 10px;
}

.info__fault::-webkit-scrollbar-track {
  background: none;
}

.info__fault::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background-color: rgba(255, 255, 255, 0.2);
  background-clip: content-box;
}

.info__close-button {
  padding: 0;
  border: none;
  background-color: transparent;
  background-image: url(../assets/images/close-button.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 36px;
  height: 36px;
  position: absolute;
  right: -54px;
  top: 0;
  cursor: pointer;
}

.info__name {
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 2px;
  padding: 0;
  margin: 0 0 60px;
}

.info__field {
  width: 100%;
  background: #2f2f2f;
  margin-bottom: 40px;
  box-sizing: border-box;
  padding: 20px;
}

.info__field:last-child {
  margin-bottom: 0;
}

.info__heading {
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
}

.info__content {
  margin: 0;
  box-sizing: border-box;
  padding: 10px;
  background: #4f4f4f;
}
</style>
