const db = wx.cloud.database();
var postsData=[];
db.collection('counters').get({
  success: function (res) {
    // res.data 是包含以上定义的两条记录的数组
    postsData = res.data;
  }
})
var app = getApp();
Page({
  data: {
  },
  //事件处理函数
  bindViewTap: function(e) {
    var postid = e.currentTarget.dataset.postid;
    wx.navigateTo({
      url: "../tests/test-content?id=" + postid
    })
  },
  onLoad: function () {
    this.setData({
      postList: postsData
    });
  },
  getUserInfo: function(e) {

  }
})
