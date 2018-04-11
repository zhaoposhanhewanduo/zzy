<template>
  <div class="home">
    <header-top></header-top>
    <!--轮播图以及查看图片-->
    <!--<div id = 'images'>
    	<div v-for = 'item in imageData'>
    		<img :src = 'item.image'>
    	</div>
    </div>-->
    <!--<mt-swipe id = 'images' class = 'my-swiper' :auto = '4000'>
		  <mt-swipe-item v-for = 'item in imageData' class = 'my-Siteam'>
		  	<img :src = 'item.image'>
		  </mt-swipe-item>
		</mt-swipe>-->
    <el-carousel trigger="click" height="150px" :arrow = 'arrow' :indicator-position = 'none'>
      <el-carousel-item v-for="item in imageData">
        <img :src = 'item.image' />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui'
import header from '../components/homehadder'
import image1 from "../assets/images/1.jpg"
import image2 from "../assets/images/2.jpg"
import image3 from "../assets/images/3.jpg"
import image4 from "../assets/images/4.jpg"
import image5 from "../assets/images/5.jpg"
import image6 from "../assets/images/6.jpg"
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App1',
      imageData:[
         {image:image1},
         {image:image2},
         {image:image3},
         {image:image4},
         {image:image5},
         {image:image6},
      ],
    }
  },
  components:{
     'header-top':header,
     'mt-swipe':Swipe,
     'mt-swipe-item':SwipeItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">  
.my-swiper{
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}
.my-Siteam{
	  position: absolute;
    width: 100%;
    height: 100%;
}
.my-Siteam img{width: 100%;height: 100%;}


 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
</style>
