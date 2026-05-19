const { MOCK, mockRequest } = require('../../utils/mock')

Page({
  data: {
    tags: ['全部', '历史文化', '音乐体验', '考古体验', '农业体验', '科技体验', '户外拓展'],
    activeTag: '全部',
    allRoutes: [],
    filteredRoutes: [],
    // 详情弹窗
    showDetail: false,
    currentRoute: {},
    // 预约表单
    showForm: false,
    today: '',
    booking: { date: '', count: '', name: '', phone: '', remark: '' },
    // 成功弹窗
    showSuccess: false,
    orderNo: ''
  },

  onLoad() {
    const now = new Date()
    this.setData({ today: `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}` })
    this.loadRoutes()
  },

  loadRoutes() {
    mockRequest(MOCK.studyRoutes).then(res => {
      this.setData({ allRoutes: res.data, filteredRoutes: res.data })
    })
  },

  filterByTag(e) {
    const tag = e.currentTarget.dataset.tag
    const routes = tag === '全部'
      ? this.data.allRoutes
      : this.data.allRoutes.filter(r => r.tags.includes(tag))
    this.setData({ activeTag: tag, filteredRoutes: routes })
  },

  showDetail(e) {
    const route = this.data.allRoutes.find(r => r.id === e.currentTarget.dataset.id)
    this.setData({ showDetail: true, currentRoute: route })
  },

  closeDetail() { this.setData({ showDetail: false }) },

  quickBook(e) {
    const route = this.data.allRoutes.find(r => r.id === e.currentTarget.dataset.id)
    this.setData({ currentRoute: route, showForm: true })
  },

  goBooking() {
    this.setData({ showDetail: false, showForm: true })
  },

  closeForm() { this.setData({ showForm: false }) },

  onDateChange(e) { this.setData({ 'booking.date': e.detail.value }) },
  onCountInput(e) { this.setData({ 'booking.count': e.detail.value }) },
  onNameInput(e) { this.setData({ 'booking.name': e.detail.value }) },
  onPhoneInput(e) { this.setData({ 'booking.phone': e.detail.value }) },
  onRemarkInput(e) { this.setData({ 'booking.remark': e.detail.value }) },

  submitBooking() {
    const b = this.data.booking
    if (!b.date || !b.count || !b.name || !b.phone) {
      wx.showToast({ title: '请填写完整信息', icon: 'none' })
      return
    }
    const orderNo = 'JHYX' + Date.now()
    this.setData({ showForm: false, showSuccess: true, orderNo,
      booking: { date: '', count: '', name: '', phone: '', remark: '' }
    })
  },

  closeSuccess() { this.setData({ showSuccess: false }) }
})
