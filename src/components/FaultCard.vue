<template>
  <article class="card">
    <div class="card__title">
      <img :src="image" alt="#" class="card__image" />
      <p class="card__name">{{ name }}</p>
    </div>
    <div class="card__content">
      <p class="card__section-name">Описание:</p>
      <p class="card__description">{{ description }}</p>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'FaultCard',
  props: {
    image: {
      type: String,
      default:
        'https://cutewallpaper.org/21/windows-error-wallpaper/Free-download-Broken-Error-Windows-Death-Screen-Glass-.jpg',
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { image } = props;
    const titleBackground = `background-image: url(${image})`;
    return { titleBackground };
  },
});
</script>

<style scoped>
.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: black;
  height: 100%;
  position: relative;
  cursor: pointer;
}

.card__content {
  width: 100%;
  position: relative;
  height: 100%;
  max-height: 40%;
  background: white;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
  /* visibility: hidden; */
  overflow: hidden;
}

.card__title {
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 8px;
  background-position: center;
  background-size: cover;
  transition: 0.3s;
}

.card__image {
  width: 100%;
  object-fit: cover;
  filter: blur(2px) brightness(40%);
  border-radius: 10px;
  height: 100%;
}

.card__name {
  position: absolute;
  top: 8%;
  left: 8%;
  right: 8%;
  margin: 0;
  font-size: 18px;
  font-weight: 200;
  transition: 0.5s;
  max-height: 50%;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  letter-spacing: 1px;
}

.card__section-name {
  margin: 0;
  font-weight: 600;
  margin-bottom: 8px;
}

.card__description {
  max-height: 100%;
  font-size: 13px;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.card:hover .card__title {
  transform: translateY(-5px);
}

.card:hover .card__name {
  transform: translateY(-5px);
}
</style>
