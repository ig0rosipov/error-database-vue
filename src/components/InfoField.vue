<template>
  <div class="item">
    <p class="item__heading">{{ heading }}</p>
    <div v-if="content && !images" class="item__content">{{ content }}</div>
    <div v-else class="item__images" :class="setGridClass(images.length)">
      <template v-for="(image, index) in images" :key="index">
        <img :src="image" class="item__image" :class="setImageClass(index)" />
      </template>
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
  setup() {
    const setGridClass = (size: number) => {
      return `grid${size}`;
    };

    const setImageClass = (index: number) => {
      return `img${index + 1}`;
    };

    return {
      setGridClass,
      setImageClass,
    };
  },
});
</script>
<style>
.item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 640px;
  background: #2e2e2e;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 11px;
}

.item__heading {
  margin: 0;
  font-size: 21px;
  margin-bottom: 10px;
}

.item__content {
  width: 100%;
  font-size: 14px;
  background: #353535;
  box-sizing: border-box;
  padding: 7px;
}

.item__images {
  max-width: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  display: grid;
  gap: 10px;
}
/* 1-2 */
.item__images_size_xs {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: 300px;
  grid-auto-rows: 300px;
}
/* 3-4 */
.item__images_size_s {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.item__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
