const db = wx.cloud.database();
var data=[];
Page({
  data: {
    url: ['/images/commodity/lunbo1.jpg', '/images/commodity/lunbo2.jpg', '/images/commodity/lunbo3.jpg', '/images/commodity/lunbo4.jpg'],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var _this=this;
    db.collection('classify').get({
      success: function (res) {
        _this.setData({
          postList: res.data
        });
      }
    }),
      db.collection('shopping').get({
        success: function (res) {
          _this.setData({
            shoppingData: res.data
          });
        }
      })
  },
  //跳到分类
  classify: function (event){
    var type = event.currentTarget.id;
    wx.navigateTo({
      url: '../classify/classify?type=' + type
    })
  },
  //跳到固定商品
  commodity: function (event) {
    var id = event.currentTarget.id;
    wx.navigateTo({
      url: '../commoditie/commoditie?id='+id
    })
  }
})