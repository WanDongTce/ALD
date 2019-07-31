const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('on')
    var that = this
    that.getlist()
  },
  topshoop: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  current: function (e) {
    var that = this
    console.log(e.currentTarget.dataset.current)
    that.setData({
      currentTab: e.currentTarget.dataset.current
    })
  },
  getlist: function () {
    console.log(app.userInfo.mobile)
    var that = this
    wx.request({
      url: 'http://social.test.54xuebaxue.com/v9/activity/index',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        "mobile": app.userInfo.mobile,
        "token": app.userInfo.token,
        // "searchname": name,
        "app_source_type": app.app_source_type,
      },
      success: function (res) {

        console.log(res.data.data[0].list)
        that.setData({
          list: res.data.data[0].list
        })

      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  to_activity: function (event) {
    var postad = event.currentTarget.dataset.postad
    console.log(postad)
    wx.navigateTo({

      url: '/pages/ailangdu/pages/activity/activity?id=' + postad
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})