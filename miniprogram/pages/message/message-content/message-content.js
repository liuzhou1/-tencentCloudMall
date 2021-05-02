const db = wx.cloud.database();
var app = getApp();
Page({
  data: {

  },
  onLoad: function (options) {
    var _this = this;
    db.collection('message').get({
      success: function (res) {
        var data = res.data;
        // res.data 是包含以上定义的两条记录的数组
        _this.setData({
          collected: res.data[options.id]
        });
      }
    });
  }
})