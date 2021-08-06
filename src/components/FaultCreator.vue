<template lang="">
  <section class="creator">
    <h1>Добавление ошибки</h1>
    <fault-form />
  </section>
</template>
<script>
import { defineComponent } from 'vue';
import FaultForm from './FaultForm.vue';
export default defineComponent({
  name: 'FaultCreator',
  components: {
    FaultForm,
  },
  props: {
    machines: {
      type: Array,
      required: true,
    },
  },
});
</script>
<style scoped>
.creator {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
