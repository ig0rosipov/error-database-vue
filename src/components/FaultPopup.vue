<template>
  <section
    class="popup"
    :class="!isPopupOpened && 'popup_closed'"
    @click.self="onOverlayPopupClose"
  >
    <popup-info
      :name="item.name"
      :description="item.description"
      :solution="item.solution"
      :images="item.images"
      :setIsPopupOpened="setIsPopupOpened"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PopupInfo from './PopupInfo.vue';

export default defineComponent({
  name: 'FaultPopup',
  components: { PopupInfo },
  props: {
    item: {
      type: Object,
      required: true,
    },
    isPopupOpened: {
      type: Boolean,
      required: true,
      default: false,
    },
    setIsPopupOpened: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const onOverlayPopupClose = (): void => {
      props.setIsPopupOpened(false);
    };

    return { onOverlayPopupClose };
  },
});
</script>

<style scoped>
.popup {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  opacity: 1;
  transition: 0.2s ease-in-out;
  visibility: visible;
}

.popup_closed {
  visibility: hidden;
  opacity: 0;
}
</style>
