<template>
<div class="nav"><el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <img src="../assets/yyfc-blue.png" alt="">
  <el-menu-item index="1">首页</el-menu-item>
  <el-menu-item index="2">课程体系</el-menu-item>
  <el-menu-item index="3">教研专家</el-menu-item>
  <el-menu-item index="4">师资建设</el-menu-item>
  <el-menu-item index="5"><a href="https://www.yinyuefengchao.com/article.html" target="_blank"></a>学琴干货</el-menu-item>
  <el-menu-item index="6"><a href="https://www.ele.me" target="_blank"></a>联系我们</el-menu-item>
</el-menu></div>

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
.nav {
    width: 100%;
    background-color: #545c64;
    height: 60px;
}
.el-menu-demo {
    width: 1200px;
    margin: 0 auto;
}
 .el-menu-demo >>> .el-menu-item {
     left: 50px;
     margin-left: 60px;
 }
 .el-menu-demo >>> img {
     float: left;
     transform: translateY(50%);
     margin-left: 20px;
 }
</style>