const app = getApp()

Page({
  data: {
    scenes: [],
    currentScene: 0,
    currentSceneInfo: null,
    showHint: true,
    isPlaying: false,
    // Three.js / WebGL相关
    glContext: null,
    camera: null,
    scene3D: null,
    touchStartX: 0,
    touchStartY: 0,
    rotateX: 0,
    rotateY: 0,
    zoom: 1
  },

  onLoad() {
    this.loadScenes()
    // 3秒后隐藏手势提示
    setTimeout(() => this.setData({ showHint: false }), 5000)
  },

  onReady() {
    this.initWebGL()
  },

  loadScenes() {
    wx.request({
      url: `${app.globalData.baseUrl}/vr/scenes`,
      success: (res) => {
        if (res.data.code === 0) {
          this.setData({
            scenes: res.data.data,
            currentSceneInfo: res.data.data[0]
          })
          this.loadSceneModel(res.data.data[0].id)
        }
      }
    })
  },

  initWebGL() {
    // 初始化WebGL上下文，加载Three.js mini-program适配版
    // 此处使用微信小程序的canvas WebGL接口
    const query = wx.createSelectorQuery()
    query.select('#vr-canvas').node().exec((res) => {
      const canvas = res[0].node
      this.data.glContext = canvas.getContext('webgl')
      // 初始化Three.js场景（需引入适配版three.js）
      this.setupThreeScene(canvas)
    })
  },

  setupThreeScene(canvas) {
    // Three.js 场景初始化（伪代码框架）
    // const scene = new THREE.Scene()
    // const camera = new THREE.PerspectiveCamera(75, canvas.width/canvas.height, 0.1, 1000)
    // const renderer = new THREE.WebGLRenderer({ canvas, context: this.data.glContext })
    // ... 加载3D模型、设置光照、开始渲染循环
  },

  loadSceneModel(sceneId) {
    // 加载指定场景的3D模型
    wx.request({
      url: `${app.globalData.baseUrl}/vr/model/${sceneId}`,
      success: (res) => {
        // 加载.glb/.gltf模型文件
        // 使用GLTFLoader解析并添加到场景中
      }
    })
  },

  switchScene(e) {
    const index = e.currentTarget.dataset.index
    this.setData({
      currentScene: index,
      currentSceneInfo: this.data.scenes[index]
    })
    this.loadSceneModel(this.data.scenes[index].id)
  },

  onTouchStart(e) {
    this.setData({
      touchStartX: e.touches[0].clientX,
      touchStartY: e.touches[0].clientY
    })
  },

  onTouchMove(e) {
    const dx = e.touches[0].clientX - this.data.touchStartX
    const dy = e.touches[0].clientY - this.data.touchStartY
    // 单指旋转场景
    this.setData({
      rotateY: this.data.rotateY + dx * 0.5,
      rotateX: this.data.rotateX + dy * 0.5
    })
    this.data.touchStartX = e.touches[0].clientX
    this.data.touchStartY = e.touches[0].clientY
  },

  onTouchEnd() {},

  toggleAudio() {
    const playing = !this.data.isPlaying
    this.setData({ isPlaying: playing })
    if (playing) {
      // 调用云函数获取AI语音导览
      wx.cloud.callFunction({
        name: 'getVoiceGuide',
        data: { sceneId: this.data.scenes[this.data.currentScene].id }
      }).then(res => {
        const audio = wx.createInnerAudioContext()
        audio.src = res.result.audioUrl
        audio.play()
      })
    }
  },

  onUnload() {
    // 清理WebGL资源
  }
})
