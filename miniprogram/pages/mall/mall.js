const { MOCK, mockRequest } = require('../../utils/mock')
const app = getApp()

Page({
  data: {
    categories: MOCK.categories,
    activeCat: '全部',
    allGoods: [],
    filteredGoods: [],
    keyword: '',
    cartCount: 0
  },

  onLoad() { this.loadGoods() },

  onShow() {
    const cart = wx.getStorageSync('cart') || []
    this.setData({ cartCount: cart.reduce((s, i) => s + i.count, 0) })
    app.globalData.cartCount = this.data.cartCount
  },

  loadGoods() {
    mockRequest(MOCK.goods).then(res => {
      this.setData({ allGoods: res.data, filteredGoods: res.data })
    })
  },

  switchCat(e) {
    const cat = e.currentTarget.dataset.cat
    this.setData({ activeCat: cat })
    this.filterGoods()
  },

  onSearch(e) {
    this.setData({ keyword: e.detail.value })
    this.filterGoods()
  },

  filterGoods() {
    let list = this.data.allGoods
    if (this.data.activeCat !== '全部') {
      list = list.filter(g => g.category === this.data.activeCat)
    }
    if (this.data.keyword) {
      list = list.filter(g => g.name.includes(this.data.keyword))
    }
    this.setData({ filteredGoods: list })
  },

  goDetail(e) {
    wx.navigateTo({ url: `/pages/mall/detail/detail?id=${e.detail.id}` })
  },

  goCart() {
    wx.navigateTo({ url: '/pages/user/orders/orders' })
  }
})
