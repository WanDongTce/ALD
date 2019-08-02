// pages/ailangdu//pages/readList/readList.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },
  getList: function(){
    var that = this;
    wx.request({
      url: app.requestUrl + 'v14/chinese/poetry',
      data: {
        "mobile": app.userInfo.mobile,
        "token": app.userInfo.token,
        "app_source_type": app.app_source_type,
        "searchname": ''
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          list: res.data.data[0].list
        })
      }
    })
  },
  gorecorder: function (e) {
    var id = e.currentTarget.dataset.id;
    var name = e.currentTarget.dataset.rname;
    var author = e.currentTarget.dataset.author;
    wx.navigateTo({
      url: `/pages/dayuwen/pages/recorder/recorder?id=${id}&name=${name}&author=${author}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
    console.log('onPullDownRefresh');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})