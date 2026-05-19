const { MOCK } = require('../../utils/mock')

Page({
  data: {
    userInfo: MOCK.userInfo
  },

  onShow() {
    // 可在此获取微信用户信息
    // wx.getUserProfile({ ... })
  },

  goOrders(e) {
    const status = e.currentTarget.dataset.status
    wx.navigateTo({ url: `/pages/user/orders/orders?status=${status}` })
  },

  goVR()       { wx.navigateTo({ url: '/pages/vr-tour/vr-tour' }) },
  goStudy()    { wx.navigateTo({ url: '/pages/study-booking/study-booking' }) },
  goHomestay() { wx.navigateTo({ url: '/pages/homestay/homestay' }) },
  goLive()     { wx.navigateTo({ url: '/pages/live/live' }) }
})
