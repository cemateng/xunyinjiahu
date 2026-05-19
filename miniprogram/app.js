App({
  globalData: {
    userInfo: null,
    isLogin: false,
    baseUrl: 'https://api.xunyinjiahu.cn',
    // VR相关配置
    vrConfig: {
      sceneList: ['贾湖遗址', '骨笛出土地', '贾湖古村落'],
      defaultScene: '贾湖遗址'
    },
    // 研学路线
    studyRoutes: [],
    // 购物车
    cartCount: 0
  },

  onLaunch() {
    // 检查登录态
    const token = wx.getStorageSync('token')
    if (token) {
      this.checkLogin(token)
    }
    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync()
    this.globalData.systemInfo = systemInfo
  },

  checkLogin(token) {
    wx.request({
      url: `${this.globalData.baseUrl}/user/check`,
      header: { Authorization: `Bearer ${token}` },
      success: (res) => {
        if (res.data.code === 0) {
          this.globalData.userInfo = res.data.data
          this.globalData.isLogin = true
        }
      }
    })
  }
})
