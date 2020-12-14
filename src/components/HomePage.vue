<template>
<div class="home_page">
  <div class="sectionBg">
    <img class="sectionOne" src="../assets/banner.png">
  </div>
  <div class="sectionGirl">
    <img class="sectionOne" src="../assets/girl-student.png">
  </div>
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

  .home_page {
    background-color: #E9EEF3;
    width: 100%;
    position: relative;
  }

  .sectionBg {
    position: absolute;
    width: 100%;
  }

  .sectionOne {
    width: 100%;
    margin: 0 auto;
  }

  .sectionGirl {
    width: 80%;
    margin: 0 auto;
    padding-top: 64px;
    position: relative;
  }

</style>