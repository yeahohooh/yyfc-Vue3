<template>
<div class="home_page">
  <div class="sectionBg">
    <img class="bgImg" src="../assets/banner.png">
  </div>
  <div class="sectionGirl">
    <img class="GirlImg" src="../assets/girl-student.png">
  </div>
  <div class="bofeiForm">
      <img src="../assets/bofei-class.png" alt="" class="bofeiImg">
  </div>
  <div class="rightBg">
      <button v-for="(item,index) in rightButtons" :key=index @mouseenter="showMe(index)" @mouseleave="hidenMe(index)"></button>
  </div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
  data() {
    return {
      rightButtons:[0,1,2,3]
    }
  },
  methods: {
    showMe(index: number) {
      var btn = document.getElementsByTagName('button')[index];
      btn.style.transition = 'all 0.2s';
      btn.style.transform = 'translateX(' + -50 + 'px)';
    },
    hidenMe(index: number) {
      var btn = document.getElementsByTagName('button')[index];
      btn.style.transition = 'all 0.2s';
      btn.style.transform = 'translateX(' + 0 + 'px)';
    }
  }
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

  .bgImg {
    width: 100%;
    height: 100%;
    min-width: 1000px;
    min-height: 500px;
    margin: 0 auto;
  }

  .sectionGirl {
    width: 80%;
    margin: 0 auto;
    padding-top: 64px;
    position: relative;
  }

  .GirlImg {
    width: 100%;
    height: 100%;
    min-width: 1000px;
    margin: 0 auto;
  }

  .bofeiForm {
      position: absolute;
      top: 50px;
      right: 80px;
  }

  .bofeiImg {
      width: 90%;
      height: 90%;
  }

  .rightBg {
      position: fixed;
      right: -50px;
      top: 150px;
      width: 100px;
      height: 400px;
  }

  .rightBg button {
      background-color: aquamarine;
      width: 100px;
      height: 50px;
      margin-top: 10px;
      border-radius: 25px 0 0 25px;
      outline: 0 none;
  }

</style>