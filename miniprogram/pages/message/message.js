const db = wx.cloud.database();
Page({
  data: {
  },
  //事件处理函数
  bindViewTap: function(e) {
    var postid = e.currentTarget.dataset.postid;
    wx.navigateTo({
      url: "../message/message-content/message-content?id=" + postid
    })
  },
  onLoad: function () {
    var _this=this;
    db.collection('message').get({
      success: function (res) {
        var data = res.data;
        _this.setData({
          postList: data
        });
      }
    })
  },
  getUserInfo: function(e) {

  }
})
