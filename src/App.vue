<template>
  <div id="app">
    <router-view></router-view>
    <y-to-top></y-to-top>
  </div>
</template>
<script>
export default {
  name: 'app',
  created(){
      // console.log(`请求页面的Hash值是${location.hash}`);
  }
} 
</script>
<style lang="scss">
  body, h1, h2, h3, h4, h5, h6, hr, p, dl, dt, dd, ul, ol, li, button, input, textarea, th, td {
      margin: 0;
      padding: 0;
  }
  h1, .h1 {
      font-size: 18px;
  }
  h2, .h2 {
      font-size: 16px;
  }
  h3, .h3 {
      font-size: 14px;
  }
  .fl {
      float: left;
  }
  .fr {
      float: right;
  }
  .clearfix {
      &:after {
          content: ".";
          display: block;
          height: 0;
          clear: both;
          visibility: hidden;
      }
  }
  .bg-img{
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .text-center {
      text-align: center;
  }
  .web-1400{
    width: 1400px;
    margin: 0 auto;
  }
  .web-1200{
    width: 1200px;
    margin: 0 auto;
  }
  .web-720 {
      width: 720px;
      margin: 0 auto;
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
  ul, ol {
    list-style: none;
  }
  button {
    border: none;
    outline: none;
  }
  .pic>img {
    display: block;
    width: 100%;
  }
  body {
    margin: 0 auto;
  }
  .m-t-1{
    margin-top: 10px;
  }
  .m-t-1-5{
    margin-top: 15px;
  }
  .m-t-2{
    margin-top: 20px;
  }
  .m-t-2-5{
    margin-top: 25px;
  }
  .m-t-3{
    margin-top: 30px;
  }
  .m-t-3-5{
    margin-top: 35px;
  }
  .m-t-4{
    margin-top: 40px;
  }
  .m-t-4-5{
    margin-top: 45px;
  }
  .m-t-5{
    margin-top: 50px;
  }
  .m-b-1{
    margin-bottom: 10px;
  }
  .m-b-1-5{
    margin-bottom: 15px;
  }
  .m-b-2{
    margin-bottom: 20px;
  }
  .m-b-2-5{
    margin-bottom: 25px;
  }
  .m-b-3{
    margin-bottom: 30px;
  }
  .m-b-3-5{
    margin-bottom: 35px;
  }
  .m-b-4{
    margin-bottom: 40px;
  }
  .m-b-4-5{
    margin-bottom: 45px;
  }
  .m-b-5{
    margin-bottom: 50px;
  }
  .m-t-10{
    margin-top: 100px;
  }
  .m-t-15{
    margin-top: 150px;
  }
  #app {
    font-family: '微软雅黑','Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
