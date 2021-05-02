const db = wx.cloud.database();
var changed = {};
Page({
  data: {
    allMoneys: 0,
    pieceMun: 1,
    hidden: false,
    checked: false
  },
  checkboxChange: function(e) {
    var checked = e.detail.value;
    for (var i = 0; i < this.data.shopCaRData.length; i++) {
      if (checked.indexOf(this.data.shopCaRData[i]._id) !== -1) {
        changed['shopCaRData[' + i + '].data.checked'] = true
      } else {
        changed['shopCaRData[' + i + '].data.checked'] = false
      }
    }
    this.setData(changed);
    this.count();
  },
  onLoad: function(options) {
    var _this = this;
    db.collection('shopCar').get({
      success: function(res) {
        var data = res.data.reverse(); 
        // res.data 是包含以上定义的两条记录的数组
        _this.setData({
          shopCaRData: data
        });
      }
    })
  },
  add: function(e) {
    var id = e.target.id;
    var shopCaRData = "shopCaRData[" + id + "].data.pieceNums";
    this.setData({
      [shopCaRData]: +this.data.shopCaRData[id].data.pieceNums + 1
    });
    this.count();
  },
  lessen: function(e) {
    var id = e.target.id;
    var shopCaRData = "shopCaRData[" + id + "].data.pieceNums";
    if (this.data.shopCaRData[id].data.pieceNums == 1) {
      return;
    }
    this.setData({
      [shopCaRData]: +this.data.shopCaRData[id].data.pieceNums - 1
    });
    this.count();
  },
  changeVal: function(e) {
    var id = e.target.id;
    var shopCaRData = "shopCaRData[" + id + "].data.pieceNums";
    this.setData({
      [shopCaRData]: e.detail.value
    });
    this.count();
  },
  count: function() {
    var count = 0;
    for (var i = 0; i < this.data.shopCaRData.length; i++) {
      if (this.data.shopCaRData[i].data.checked) {
        var num = this.data.shopCaRData[i].data.pieceNums,
          wap = this.data.shopCaRData[i].data.priceWap;
        count += num * wap;
      }
    }
    count = count.toFixed(2);
    this.setData({
      allMoneys: count
    })
  },
  allChange: function(e) {
    var checked = e.detail.value
    if (checked) {
      for (var i = 0; i < this.data.shopCaRData.length; i++) {
        changed['shopCaRData[' + i + '].data.checked'] = true
      }
    } else {
      for (var i = 0; i < this.data.shopCaRData.length; i++) {
        changed['shopCaRData[' + i + '].data.checked'] = false
      }
    }
    this.setData(changed);
    this.count();
  },
  management:function(){

  },
  onPullDownRefresh: function () {
    wx.startPullDownRefresh();
  }

})