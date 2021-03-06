Page({
  data: {
    
  },
  onLoad: function (options) {
    var _this=this;

  wx.getSetting({
    success(res) {
      if (res.authSetting['scope.userInfo']) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称
        wx.getUserInfo({
          success(res) {
            const userInfo = res.userInfo
            const nickName = userInfo.nickName
            const avatarUrl = userInfo.avatarUrl
            const gender = userInfo.gender // 性别 0：未知、1：男、2：女
            const province = userInfo.province
            const city = userInfo.city
            const country = userInfo.country
            console.log(avatarUrl)
            _this.setData({
              nickName: nickName,
              url: avatarUrl
            });
          }
        })
      }
    }
  })
},
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  }

});