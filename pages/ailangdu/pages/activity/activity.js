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
    playStatus: "",
    accessStatus: "",
    played_data:[], //
    project_list: [] //参赛作品
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var that = this
    postId = options.id
    let type = options.type;
    that.getlist(); 
    that.getPlayedData(type);

  },
  //获取参赛作品列表
  getPlayedData: function(type){
    var that = this;
    wx.request({
      url: app.requestUrl + 'v9/activity/partner',
      data: {
        "mobile": app.userInfo.mobile,
        "token": app.userInfo.token,
        // "searchname": name,
        "app_source_type": app.app_source_type,
        "activity_id": postId,
        "type": type
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res);
        let list = res.data.data[0].list;
        that.setData({
          project_list: list
        })
        // that.setData({
        //   active_time: res.data.data[0].item.active_time,
        //   end_time: res.data.data[0].item.end_time,
        //   introduction: res.data.data[0].item.introduction,
        //   imglist: res.data.data[0].item.photoList,
        //   playStatus: res.data.data[0].item.status,
        //   accessStatus: res.data.data[0].item.is_participate,
        // })
      }
    })
  },
  getlist: function () {
    var that = this
    wx.request({
      url: app.requestUrl+'v9/activity/activity-info',
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
        console.log(res.data.data[0].item)
        that.setData({
          active_time: res.data.data[0].item.active_time,
          end_time: res.data.data[0].item.end_time,
          introduction: res.data.data[0].item.introduction,
          imglist: res.data.data[0].item.photoList,
          playStatus: res.data.data[0].item.status,
          accessStatus: res.data.data[0].item.is_participate,
          played_data: res.data.data[0].item.participate_data
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