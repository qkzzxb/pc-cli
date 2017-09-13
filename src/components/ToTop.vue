<template>
  <transition name="custom-classes-transition" :duration="{ enter: 800, leave: 500 }"
    enter-active-class="animated fadeInRight"
    leave-active-class="animated fadeOutRight">
    <div id="y-to-top" @click.once="toTop" v-if="show"></div>
  </transition>
</template>

<script>
  export default {
    name:'y-to-top',
    data() {
      return {
        show: false,
        on:false
      }
    },
    created(){
      this.onScroll();
    },
    updated(){
      this.onScroll();
    },
    methods:{
      onScroll(){
        let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollHeight>300){
          this.show=true;
        }else{
          this.show=false;
        }
      },
      toTop(){
        let timer;
        let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
        let speed=scrollHeight/20;
        timer=setInterval(function(){
          document.documentElement.scrollTop = document.body.scrollTop=scrollHeight=scrollHeight-=speed;
          if(scrollHeight <= 0 ){
            clearInterval(timer);
            document.documentElement.scrollTop = document.body.scrollTop=0
          }
        },30)
      }
    },
    mounted() {
      this.$nextTick(function () {
        window.addEventListener('scroll', lodash.throttle(this.onScroll,100));
      })
    }
  }
  
</script>

<style scoped lang="scss">
  #y-to-top{
    width: 50px;
    height: 50px;
    border-radius:50%;
    background: #d8d8d8;
    position: fixed;
    right: 20px;
    bottom: 20px;
    cursor: pointer;
    &:hover{
      background:#e1e1e1;
    }
  }
</style>