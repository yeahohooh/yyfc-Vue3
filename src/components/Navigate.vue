<template>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <img src="" alt="">
  <el-menu-item class="el" index="1">首页</el-menu-item>
  <el-menu-item class="el" index="2">课程体系</el-menu-item>
  <el-menu-item class="el" index="3">教研专家</el-menu-item>
  <el-menu-item class="el" index="4">师资建设</el-menu-item>
  <el-menu-item class="el" index="5"><a href="https://www.ele.me" target="_blank"></a>学琴干货</el-menu-item>
  <el-menu-item class="el" index="6"><a href="https://www.ele.me" target="_blank"></a>联系我们</el-menu-item>
</el-menu>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  
})
  export default class Navigate extends Vue {
    // data() {
    //   return {
    //     activeIndex: '1',
    //     activeIndex2: '1'
    //   };
    // },
    // methods: {
    //   handleSelect(key, keyPath) {
    //     console.log(key, keyPath);
    //   }
    // }
  }
</script>

<style scoped>
 .el /deep/ .el-menu-item {
     width: 2000px;
 }
</style>