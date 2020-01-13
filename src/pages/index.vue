<template>
 <div class="home">
    <div>
        这里是首页
    </div>
    <van-field v-model="value" placeholder="请输入用户名" />
    <van-button type="primary" @click="goList">列表页面</van-button>
 </div>
</template>

<script>
export default {
  data(){
    return{
      value:''
    }
  },
  mounted(){
      
  },
  methods:{
    goList(){
        this.$router.push({path:'/list'})
    }
  }
}
</script>

<style>

</style>
