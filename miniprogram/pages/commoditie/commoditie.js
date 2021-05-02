const db = wx.cloud.database();
Page({
  data: {
    url: [],
    indicatorDots: false,
    autoplay: false,
    circular: true,
    interval: 2000,
    duration: 500,
    hidden:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    var _this = this;
    db.collection('shopping').where({
      id: id
    }).get({
      success: function (res) {
        _this.setData({
          shoppingData: res.data
        });
      }
    })
  },

  homePage: function(){
    wx.switchTab({
      url: '../index/index'
    })
  },
  goShopCar: function () {
    wx.switchTab({
      url: '../shppingCar/shppingCar'
    })
  },
  shopCar: function (event) {
    var _this = this;
    var data = this.data.shoppingData[0];
    data.checked=false;
    data.pieceNums=1;
    delete data._id;
    db.collection('shopCar').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        data: data
      }, 
      success: function () {
        _this.setData({
          hidden: false
        });
        setTimeout(function(){
          _this.setData({
            hidden: true
          });
        },1000);
      }
    })
  }
})