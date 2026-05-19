Component({
  properties: {
    visible: { type: Boolean, value: false },
    title: { type: String, value: '语音导览' },
    audioUrl: { type: String, value: '' },
    duration: { type: Number, value: 0 }
  },
  data: {
    playing: false,
    progress: 0,
    currentTimeText: '00:00',
    durationText: '00:00'
  },
  lifetimes: {
    detached() { this.destroyAudio() }
  },
  methods: {
    onToggle() {
      if (this.data.playing) { this.pause() } else { this.play() }
    },
    play() {
      // 模拟音频播放（实际项目需对接真实音频文件）
      this.setData({ playing: true })
      this._timer = setInterval(() => {
        let p = this.data.progress + 1
        if (p >= 100) { p = 0; this.setData({ playing: false }) }
        const total = this.properties.duration || 180
        const cur = Math.floor(total * p / 100)
        this.setData({
          progress: p,
          currentTimeText: this.fmt(cur),
          durationText: this.fmt(total)
        })
      }, 1000)
    },
    pause() {
      this.setData({ playing: false })
      if (this._timer) { clearInterval(this._timer); this._timer = null }
    },
    onSeek(e) {
      this.setData({ progress: e.detail.value })
    },
    onPrev() { this.triggerEvent('prev') },
    onNext() { this.triggerEvent('next') },
    onClose() {
      this.pause()
      this.triggerEvent('close')
    },
    fmt(s) {
      const m = Math.floor(s / 60), sec = Math.floor(s % 60)
      return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
    },
    destroyAudio() {
      if (this._timer) { clearInterval(this._timer) }
    }
  }
})
