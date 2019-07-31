var postId
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //开始时间
    active_time: "",
    end_time: "",
    introduction: "",
    imglist: [],
    kechanyu: "",
    weichanyu: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    postId = options.id
    var that = this
    that.getlist()

  },
  getlist: function () {
    var that = this
    wx.request({
      url: 'http://social.test.54xuebaxue.com/v9/activity/activity-info',
      data: {
        "mobile": app.userInfo.mobile,
        "token": app.userInfo.token,
        // "searchname": name,
        "app_source_type": app.app_source_type,
        "activity_id": postId
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data.data[0].item.participate_data)
        that.setData({
          active_time: res.data.data[0].item.active_time,
          end_time: res.data.data[0].item.end_time,
          introduction: res.data.data[0].item.introduction,
          imglist: res.data.data[0].item.photoList,
          kechanyu: res.data.data[0].item.status,
          weichanyu: res.data.data[0].item.is_participate
        })
      }
    })
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
  topshoop: function () {
    wx.navigateBack({
      delta: 1
    })
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