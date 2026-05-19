const { MOCK, mockRequest } = require('../../utils/mock')

Page({
  data: { homestays: [] },
  onLoad() {
    mockRequest(MOCK.homestays).then(res => this.setData({ homestays: res.data }))
  },
  goDetail(e) {
    wx.navigateTo({ url: `/pages/homestay/detail/detail?id=${e.currentTarget.dataset.id}` })
  }
})
