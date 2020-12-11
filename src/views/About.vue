<template>
  <div class="about">
    <Navigate/>
    <HomePage/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Navigate from '@/components/Navigate.vue';
import HomePage from '@/components/HomePage.vue';

@Options({
  components: {
    Navigate,
    HomePage,
  },
})

export default class About extends Vue {}
</script>
