<template>
  <div class="home">
    <header-top></header-top>
  </div>
</template>

<script>
import header from '../components/homehadder'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App1'
    }
  },
  components:{
     'header-top':header,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">  
</style>
