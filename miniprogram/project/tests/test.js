// 轮播图
// Page({
//   data: {
//     background: ['/images/post/crab.png', '/images/post/crab.png', '/images/post/crab.png'],
//     indicatorDots: true,
//     vertical: false,
//     autoplay: true,
//     circular: true,
//     interval: 2000,
//     duration: 400,
//     previousMargin: 0,
//     nextMargin: 0
//   },
//   changeProperty: function (e) {
//     var propertyName = e.currentTarget.dataset.propertyName
//     var newData = {}
//     newData[propertyName] = e.detail.value
//     this.setData(newData)
//   }
// })

//图标icon
// Page({
// data: {
//   iconSize: [20, 30, 40, 50, 60, 70],
//     iconColor: [
//       'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
//     ],
//       iconType: [
//         'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
//       ]
// }
// })


//HTML转格式书写
// Page({
//   data: {
//     html: '<div class="div_class" style="line-height: 60px; color: red;">Hello&nbsp;World!</div>',
//     nodes: [{
//       name: 'div',
//       attrs: {
//         class: 'div_class',
//         style: 'line-height: 60px; color: red;'
//       },
//       children: [{
//         type: 'text',
//         text: 'Hello&nbsp;World!'
//       }]
//     }]
//   },
//   tap() {
//     console.log('tap')
//   }
// })


// button属性
var types = ['default', 'primary', 'warn']
var pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },
  setDisabled: function (e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function (e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function (e) {
    this.setData({
      loading: !this.data.loading
    })
  },
  onGotUserInfo: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
  },
}

for (var i = 0; i < types.length; ++i) {
  (function (type) {
    pageObject[type] = function (e) {
      var key = type + 'Size'
      var changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  })(types[i])
}

Page(pageObject)