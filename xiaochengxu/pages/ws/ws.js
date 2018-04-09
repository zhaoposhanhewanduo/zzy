Page({
  data:{
    aadata:[
      {"name":"天气"},
      {"name":"日历"},
      {"name":"2"},
      {"name":"3"},
      {"name":"4"},
      {"name":"5"},
      {"name":"6"},
      {"name":"7"},
    ]
  },
  changeclimate:function(){
    wx.request({
      url: 'http://jisutqybmf.market.alicloudapi.com/weather/query?AppKey=24840795&AppSecret=04e5e14035e27d7666354de0562b7cdf',
      data: {
        city: '天津',
        citycode: '0',
        cityid:'',
        ip:'',
        location:''
      },
      header: {
        'Authorization': 'APPCODE 5276d59194b94124ae44f4c4eceddfea'
      },
      method: "get",
      success: function (res) {
        console.log(res.data)
      }
    })
  }
})