const db = wx.cloud.database();

Page({
  data: {

  },
  onLoad: function (options) {
    var type = options.type;
    var _this = this;
    db.collection('shopping').where({
      type: type
    }).get({
      success: function (res) {
        // res.data 是包含以上定义的两条记录的数组
        console.log(res.data);
        _this.setData({
          shoppingData: res.data,
          url: res.data[0].pic_path
        });
      }
    })
  },
  commodity: function (event) {
    var id = event.currentTarget.id;
    wx.navigateTo({
      url: '../commoditie/commoditie?id=' + id
    })
  }
})