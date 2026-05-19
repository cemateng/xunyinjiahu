const app = getApp()

Page({
  data: {
    banners: [
      { id: 1, image: '/images/banner/banner1.svg', title: '贾湖骨笛 · 九千年回响' },
      { id: 2, image: '/images/banner/banner2.svg', title: 'VR云游 · 身临其境' },
      { id: 3, image: '/images/banner/banner3.svg', title: '研学之旅 · 探索文明之源' }
    ],
    introImage: '/images/intro/jiahu.svg',
    hotRoutes: [],
    featuredGoods: []
  },

  onLoad() {
    this.loadHotRoutes()
    this.loadFeaturedGoods()
  },

  onShow() {
    // 更新购物车数量
    const cart = wx.getStorageSync('cart') || []
    app.globalData.cartCount = cart.length
  },

  loadHotRoutes() {
    wx.request({
      url: `${app.globalData.baseUrl}/study/routes`,
      data: { limit: 4 },
      success: (res) => {
        if (res.data.code === 0) {
          this.setData({ hotRoutes: res.data.data })
        }
      }
    })
  },

  loadFeaturedGoods() {
    wx.request({
      url: `${app.globalData.baseUrl}/mall/goods`,
      data: { featured: 1, limit: 4 },
      success: (res) => {
        if (res.data.code === 0) {
          this.setData({ featuredGoods: res.data.data })
        }
      }
    })
  },

  // 导航跳转
  goVR()       { wx.navigateTo({ url: '/pages/vr-tour/vr-tour' }) },
  goStudy()    { wx.navigateTo({ url: '/pages/study-booking/study-booking' }) },
  goGuide()    { wx.switchTab({ url: '/pages/guide/guide' }) },
  goMall()     { wx.switchTab({ url: '/pages/mall/mall' }) },
  goHomestay() { wx.navigateTo({ url: '/pages/homestay/homestay' }) },
  goLive()     { wx.navigateTo({ url: '/pages/live/live' }) },

  goRouteDetail(e) {
    wx.navigateTo({ url: `/pages/study-booking/study-booking?id=${e.currentTarget.dataset.id}` })
  },

  goGoodsDetail(e) {
    wx.navigateTo({ url: `/pages/mall/detail/detail?id=${e.currentTarget.dataset.id}` })
  }
})
