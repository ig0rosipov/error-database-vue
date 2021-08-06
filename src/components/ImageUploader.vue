<template lang="">
  <div class="uploader">
    <div class="uploader__fake-input">
      <button
        v-if="uploadedImages.length < 10"
        class="uploader__fake-button"
        @click.prevent="handleFakeButtonClick"
      >
        Выберите изображения
      </button>
      <ul v-if="uploadedImages.length > 0" class="uploader__gallery">
        <li
          v-for="(image, index) in uploadedImages"
          class="uploader__preview"
          :key="index"
        >
          <img class="uploader__preview-image" :src="image.data" />
        </li>
      </ul>
    </div>
    <input
      class="uploader__input"
      type="file"
      multiple
      @change="handleUpload"
      ref="fileInput"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'ImageUploader',
  props: {},
  setup() {
    interface ImageData {
      name: string;
      data: string | ArrayBuffer | null;
    }
    const fileInput = ref<any>(null);
    const uploadedImages = ref<ImageData[]>([]);

    const readAsDataURL = (file: File) => {
      return new Promise<ImageData>(function (resolve, reject) {
        let reader = new FileReader();
        reader.onload = function () {
          resolve({
            name: file.name,
            data: reader.result,
          });
        };
        reader.onerror = function () {
          reject(reader);
        };
        reader.readAsDataURL(file);
      });
    };

    const handleUpload = (event: Event) => {
      const fileInputElement = event.target as HTMLInputElement;
      const files = fileInputElement.files as FileList;
      const readers: Promise<ImageData>[] = [];
      for (let i = 0; i < files.length; i++) {
        readers.push(readAsDataURL(files[i]));
      }
      Promise.all(readers).then((values) => (uploadedImages.value = values));
    };

    const handleFakeButtonClick = () => {
      fileInput.value.click();
    };

    return {
      fileInput,
      uploadedImages,
      handleUpload,
      handleFakeButtonClick,
    };
  },
});
</script>
<style scoped>
.uploader {
  width: 100%;
}

.uploader__fake-button {
  width: 100%;
  height: 50px;
  cursor: pointer;
  background: none;
  border: 3px solid #fff;
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  font-weight: 300;
  letter-spacing: 5px;
}

.uploader__gallery {
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 100px));
  grid-auto-rows: 100px;
  gap: 10px;
  box-sizing: border-box;
  padding: 20px;
}

.uploader__preview {
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin-right: 20px;
}

.uploader__preview:last-child {
  margin-right: 0;
}

.uploader__preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.uploader__input {
  display: none;
  width: 0;
  height: 0;
}
</style>
