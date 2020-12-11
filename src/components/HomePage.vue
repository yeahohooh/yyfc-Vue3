<template>
    <el-container>
  <el-main>
      <img class="sectionOne" src="../assets/banner.png">
      <img class="sectionOne" src="../assets/girl-student.png">
      </el-main>
</el-container>

<el-container>
  <el-main>Main</el-main>
</el-container>
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
      height: 1000px;
      position: absolute;
      margin: 0 auto;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    width: 100%;
    position: relative;
  }
</style>