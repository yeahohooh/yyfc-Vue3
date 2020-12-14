<template>
<div class="main">
    <img class="sectionOne" src="../assets/banner.png">
    <img class="sectionOne" src="../assets/girl-student.png">
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
  
})
export default class HomePage extends Vue {

}
</script>

<style scoped>
  .sectionOne {
      width: 1200px;
      position: absolute;
      margin: 0 auto;
      /* left: 0; */
  }
  .main {
    background-color: #E9EEF3;
    width: 100%;
    position: relative;
  }
</style>