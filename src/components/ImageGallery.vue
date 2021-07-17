<template>
  <div class="gallery__images" :class="setGridClass(images.length)">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="gallery__image-wrapper"
      :class="[
        isOpened[`img${index}`] && 'gallery__image-wrapper_format_popup',
        setImageClass(index),
      ]"
      @click.self="setIsOpened(index, false)"
    >
      <img
        :src="image"
        class="gallery__image"
        :class="isOpened[`img${index}`] && 'gallery__image_format_popup'"
        @click="setIsOpened(index, true)"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ImageGallery',
  props: {
    images: {
      type: Array,
      required: true,
      default: [],
    },
  },
  setup(props) {
    const getImagesStatusObject = (length: number): Object => {
      const result: { [index: string]: boolean } = {};
      for (let i = 0; i < length; i++) {
        result[`img${i}`] = false;
      }
      console.log(result);
      return result;
    };

    const isOpened = ref<Object>(getImagesStatusObject(props.images.length));
    const setGridClass = (size: number) => {
      return `grid${size}`;
    };

    const setImageClass = (index: number) => {
      return `img${index + 1}`;
    };

    const setIsOpened = (index: string, value: boolean) => {
      const copy: { [index: string]: any } = { ...isOpened.value };
      copy[`img${index}`] = value;
      isOpened.value = copy;
    };

    return {
      isOpened,
      setGridClass,
      setImageClass,
      setIsOpened,
    };
  },
});
</script>
<style scoped>
@keyframes opacity {
  from {
    width: 0;
    height: 0;
    opacity: 0;
  }
  to {
    width: 80%;
    height: auto;
    opacity: 1;
  }
}

.gallery__images {
  max-width: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  display: grid;
  gap: 10px;
}

/* 1-2 */
.gallery__images_size_xs {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: 300px;
  grid-auto-rows: 300px;
}
/* 3-4 */
.gallery__images_size_s {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.gallery__image-wrapper {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s ease-in;
}

.gallery__image-wrapper_format_popup {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.gallery__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery__image_format_popup {
  width: 80%;
  height: auto;
  animation: opacity 0.4s ease-out;
}

.grid1 {
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, minmax(100px, 400px));
  grid-template-areas: 'img1';
}

.grid2 {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, minmax(100px, 400px));
  grid-template-areas: 'img1 img2';
}

.grid3 {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, minmax(100px, 200px));
  grid-template-areas:
    'img1 img1 img2'
    'img1 img1 img3';
}

.grid4 {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  grid-template-areas:
    'img1 img1 img2'
    'img1 img1 img3'
    'img1 img1 img4';
}
.grid5 {
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 100px);
  grid-template-areas:
    'img1 img1 img1 img2 img2 img2'
    'img1 img1 img1 img2 img2 img2'
    'img3 img3 img4 img4 img5 img5';
}
.grid6 {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, minmax(100px, 200px));
  grid-template-areas:
    'img1 img2 img3'
    'img4 img5 img6';
}
.grid7 {
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 50px);
  grid-template-areas:
    'img1 img1 img1 img1 img2 img2 img2 img2 img3 img3 img3 img3'
    'img1 img1 img1 img1 img2 img2 img2 img2 img3 img3 img3 img3'
    'img1 img1 img1 img1 img2 img2 img2 img2 img3 img3 img3 img3'
    'img1 img1 img1 img1 img2 img2 img2 img2 img3 img3 img3 img3'
    'img4 img4 img4 img5 img5 img5 img6 img6 img6 img7 img7 img7'
    'img4 img4 img4 img5 img5 img5 img6 img6 img6 img7 img7 img7';
}
.grid8 {
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 100px);
  grid-template-areas:
    'img1 img1 img1 img2 img2 img2'
    'img1 img1 img1 img2 img2 img2'
    'img3 img3 img4 img4 img5 img5'
    'img6 img6 img7 img7 img8 img8';
}
.grid9 {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(100px, 200px));
  grid-template-areas:
    'img1 img2 img3'
    'img4 img5 img6'
    'img7 img8 img9';
}
.grid10 {
  min-height: 500px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 100px);
  grid-template-areas:
    'img1 img1 img1 img2 img2 img2'
    'img1 img1 img1 img2 img2 img2'
    'img3 img3 img3 img4 img4 img4'
    'img3 img3 img3 img4 img4 img4'
    'img5 img6 img7 img8 img9 img10';
}

.img1 {
  grid-area: img1;
}
.img2 {
  grid-area: img2;
}
.img3 {
  grid-area: img3;
}
.img4 {
  grid-area: img4;
}
.img5 {
  grid-area: img5;
}
.img6 {
  grid-area: img6;
}
.img7 {
  grid-area: img7;
}
.img8 {
  grid-area: img8;
}
.img9 {
  grid-area: img9;
}
.img10 {
  grid-area: img10;
}
</style>
