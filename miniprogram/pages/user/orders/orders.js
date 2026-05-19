const { MOCK } = require('../../../utils/mock')

Page({
  data: {
    activeTab: 0,
    // 购物车
    cart: [],
    totalPrice: 0,
    // 订单
    orders: [],
    filteredOrders: [],
    orderStatus: 'all',
    statusMap: MOCK.orderStatusMap
  },

  onLoad(options) {
    if (options.status) {
      this.setData({ activeTab: 1, orderStatus: options.status })
      this.loadOrders()
    }
  },

  onShow() {
    this.loadCart()
    if (this.data.activeTab === 1) { this.loadOrders() }
  },

  loadCart() {
    const cart = wx.getStorageSync('cart') || []
    const total = cart.reduce((s, i) => s + i.price * i.count, 0)
    this.setData({ cart, totalPrice: total })
  },

  loadOrders() {
    const orders = wx.getStorageSync('orders') || []
    this.setData({ orders })
    this.filterOrders()
  },

  switchTab(e) {
    const tab = parseInt(e.currentTarget.dataset.tab)
    this.setData({ activeTab: tab })
    if (tab === 1) { this.loadOrders() }
  },

  // 购物车操作
  increase(e) {
    const cart = this.data.cart
    const item = cart.find(i => i.id === e.currentTarget.dataset.id)
    if (item) { item.count++ }
    wx.setStorageSync('cart', cart)
    this.loadCart()
  },

  decrease(e) {
    const cart = this.data.cart
    const item = cart.find(i => i.id === e.currentTarget.dataset.id)
    if (item && item.count > 1) { item.count-- }
    wx.setStorageSync('cart', cart)
    this.loadCart()
  },

  removeItem(e) {
    let cart = this.data.cart
    cart = cart.filter(i => i.id !== e.currentTarget.dataset.id)
    wx.setStorageSync('cart', cart)
    this.loadCart()
  },

  checkout() {
    if (this.data.cart.length === 0) return
    const order = {
      id: 'JHYX' + Date.now(),
      items: [...this.data.cart],
      total: this.data.totalPrice,
      status: 1,
      time: new Date().toISOString()
    }
    const orders = wx.getStorageSync('orders') || []
    orders.unshift(order)
    wx.setStorageSync('orders', orders)
    wx.removeStorageSync('cart')
    this.loadCart()
    wx.showToast({ title: '下单成功！', icon: 'success' })
  },

  // 订单筛选
  filterOrders(e) {
    const status = e ? e.currentTarget.dataset.status : this.data.orderStatus
    const orders = status === 'all'
      ? this.data.orders
      : this.data.orders.filter(o => o.status === parseInt(status))
    this.setData({ orderStatus: status, filteredOrders: orders })
  },

  goMall() {
    wx.switchTab({ url: '/pages/mall/mall' })
  }
})
