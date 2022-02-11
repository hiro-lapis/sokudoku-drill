<template>
  <button class="c-button" @click="$emit('click-event')">{{ title }}</button>
</template>

<script lang="ts">
// import { PropOptions as props } from '@vue/composition-api';

export default {
  props: {
      title: { type: String, default: '' },
  },
  emits: [ 'click-event' ],
}
</script>
