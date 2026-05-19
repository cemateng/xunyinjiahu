const { MOCK, mockRequest } = require('../../../utils/mock')

Page({
  data: {
    id: null,
    goods: {},
    cartCount: 0,
    showBuy: false,
    buyCount: 1
  },

  onLoad(options) {
    this.setData({ id: parseInt(options.id) })
    this.loadGoods()
    this.updateCartCount()
  },

  loadGoods() {
    const goods = MOCK.goods.find(g => g.id === this.data.id)
    if (goods) {
      this.setData({ goods })
    }
  },

  updateCartCount() {
    const cart = wx.getStorageSync('cart') || []
    this.setData({ cartCount: cart.reduce((s, i) => s + i.count, 0) })
  },

  addToCart() {
    const cart = wx.getStorageSync('cart') || []
    const idx = cart.findIndex(i => i.id === this.data.id)
    if (idx >= 0) {
      cart[idx].count++
    } else {
      cart.push({ id: this.data.id, name: this.data.goods.name,
                  price: this.data.goods.price, image: this.data.goods.image, count: 1 })
    }
    wx.setStorageSync('cart', cart)
    this.updateCartCount()
    wx.showToast({ title: '已加入购物车', icon: 'success' })
  },

  buyNow() {
    this.setData({ showBuy: true, buyCount: 1 })
  },

  increase() { this.setData({ buyCount: this.data.buyCount + 1 }) },
  decrease() {
    if (this.data.buyCount > 1) { this.setData({ buyCount: this.data.buyCount - 1 }) }
  },

  confirmBuy() {
    const order = {
      id: 'JHYX' + Date.now(),
      items: [{ ...this.data.goods, count: this.data.buyCount }],
      total: this.data.goods.price * this.data.buyCount,
      status: 1,
      time: new Date().toISOString()
    }
    const orders = wx.getStorageSync('orders') || []
    orders.unshift(order)
    wx.setStorageSync('orders', orders)
    this.setData({ showBuy: false })
    wx.showToast({ title: '支付成功！', icon: 'success' })
  },

  cancelBuy() { this.setData({ showBuy: false }) },

  goCart() {
    wx.navigateTo({ url: '/pages/user/orders/orders' })
  }
})
