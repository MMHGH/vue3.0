<template>
 <div class="list">
   <h1>我是列表页面</h1>
   <component v-bind:is="item.type" v-for="(item,index) in list" :key="index" :data="item"></component>
 </div>
</template>

<script>
import { getAllComponents } from './template'

export default {
  data(){
    return{
      list:[
        {
          type:'One',
          text:1111111111111
        },
        {
          type:'Two',
          text:2222222222222
        },
        {
          type:'Three',
          text:3333333333333
        },
      ]
    }
  },
  mounted(){
   
  },
  components:{
    ...getAllComponents //拓展运算符
  }
}
</script>

<style>

</style>
