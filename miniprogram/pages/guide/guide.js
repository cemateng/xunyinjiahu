const { MOCK, mockRequest } = require('../../utils/mock')

Page({
  data: {
    longitude: 113.581,
    latitude: 33.421,
    currentLocation: '贾湖村·贾湖遗址',
    markers: [],
    nearbySpots: [],
    // 音频面板
    showAudioPanel: false,
    currentSpot: {},
    currentSpotIndex: 0,
    isPlaying: false
  },

  onLoad() {
    this.initLocation()
    this.loadNearbySpots()
  },

  initLocation() {
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        this.setData({ longitude: res.longitude, latitude: res.latitude })
      },
      fail: () => {
        // 默认使用贾湖遗址坐标
        this.setData({ longitude: 113.581, latitude: 33.421 })
      }
    })
  },

  loadNearbySpots() {
    mockRequest(MOCK.nearbySpots).then(res => {
      const spots = res.data
      this.setData({
        nearbySpots: spots,
        markers: spots.map(s => ({
          id: s.id,
          latitude: s.lat,
          longitude: s.lng,
          title: s.name,
          iconPath: '/images/marker.png',
          width: 32,
          height: 32,
          callout: { content: s.name, display: 'BYCLICK' }
        }))
      })
    })
  },

  startAR() {
    wx.showToast({ title: 'AR识别功能开发中', icon: 'none' })
    // 正式环境跳转: wx.navigateTo({ url: '/pages/guide/ar-scanner' })
  },

  playAudio(e) {
    const id = e.currentTarget.dataset.id
    const index = this.data.nearbySpots.findIndex(s => s.id === id)
    const spot = this.data.nearbySpots[index]
    this.setData({
      currentSpot: spot,
      currentSpotIndex: index,
      showAudioPanel: true,
      isPlaying: true
    })
  },

  onAudioPrev() {
    const spots = this.data.nearbySpots
    const idx = (this.data.currentSpotIndex - 1 + spots.length) % spots.length
    this.setData({
      currentSpot: spots[idx],
      currentSpotIndex: idx
    })
  },

  onAudioNext() {
    const spots = this.data.nearbySpots
    const idx = (this.data.currentSpotIndex + 1) % spots.length
    this.setData({
      currentSpot: spots[idx],
      currentSpotIndex: idx
    })
  },

  onAudioClose() {
    this.setData({ showAudioPanel: false, isPlaying: false })
  },

  onMarkerTap(e) {
    const id = e.detail.markerId
    const index = this.data.nearbySpots.findIndex(s => s.id === id)
    const spot = this.data.nearbySpots[index]
    this.setData({
      currentSpot: spot,
      currentSpotIndex: index,
      showAudioPanel: true,
      isPlaying: true
    })
  }
})
