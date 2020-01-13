<template>
  <div id="app">
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  mounted(){
    let params = {
        resourceType: "M"
    }
    // this.$axios.post('/api/user/resource/listUserResource',params,
    //   { 
    //     headers:{
    //       'Content-Type':'application/json;charset=UTF-8',
    //       'Authorization':'bearer 10238b0a-c047-41ac-a937-5d439fc66b1a'
    //     },
    //   }).then(res => {                   
    //   console.log(11,res);   
    // })
    // this.axios.post(this.$api.getUserResource, params).then((res)=> {
    //   console.log(11,res);   
    // })
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
