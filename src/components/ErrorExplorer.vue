<template>
  <section class="explorer">
    <h1 class="explorer__title">{{ title }}</h1>
    <p class="explorer__heading">Выберите оборудование</p>
    <input type="text" class="explorer__machines" />
    <ul class="explorer__notes">
      <li :for="note in data" class="explorer__note"></li>
    </ul>
  </section>
</template>
<script>
export default defineComponent({
  name: 'ErrorExplorer',
  props: {
    title: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
});
</script>
<style>
</style>