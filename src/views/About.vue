<template>
  <div class="about">
    <Navigate/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Navigate from '@/components/Navigate.vue';

@Options({
  components: {
    Navigate,
  },
})

export default class About extends Vue {}
</script>
