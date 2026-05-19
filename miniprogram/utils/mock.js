// 寻音贾湖 - 统一Mock数据层
// 模拟所有后端API响应，支持模拟网络延迟

const MOCK = {
  // ==================== Banner轮播 ====================
  banners: [
    { id: 1, image: '/images/banner/banner1.jpg', title: '贾湖骨笛 · 九千年回响' },
    { id: 2, image: '/images/banner/banner2.jpg', title: 'VR云游 · 身临其境探古迹' },
    { id: 3, image: '/images/banner/banner3.jpg', title: '研学之旅 · 探索文明之源' }
  ],

  // ==================== VR场景 ====================
  vrScenes: [
    {
      id: 1,
      name: '贾湖遗址全景',
      thumb: '/images/vr/scene1_thumb.jpg',
      description: '贾湖遗址位于河南省漯河市舞阳县北舞渡镇贾湖村，距今约9000-7500年，是新石器时代早期的重要遗址。遗址面积约5.5万平方米，出土了大量珍贵文物。',
      modelUrl: '/models/jiahu_site.glb',
      hotspots: [
        { x: 0.3, y: 0.5, label: '骨笛出土地', targetSceneId: 2 },
        { x: 0.7, y: 0.4, label: '陶窑遗址', targetSceneId: 3 }
      ]
    },
    {
      id: 2,
      name: '骨笛出土地',
      thumb: '/images/vr/scene2_thumb.jpg',
      description: '贾湖骨笛出土于墓葬区M282号墓，共出土40余支，用丹顶鹤尺骨制成，距今约9000年，是世界上发现最早的可吹奏乐器，改写了世界音乐史。',
      modelUrl: '/models/bone_flute_site.glb',
      hotspots: [
        { x: 0.5, y: 0.5, label: 'M282号墓', targetSceneId: 1 }
      ]
    },
    {
      id: 3,
      name: '贾湖古村落',
      thumb: '/images/vr/scene3_thumb.jpg',
      description: '复原的贾湖先民生活场景：半地穴式房屋、陶器制作、稻作农业、渔猎采集等，重现9000年前的人类生活方式。',
      modelUrl: '/models/ancient_village.glb',
      hotspots: []
    }
  ],

  // ==================== 附近景点/展品（导览用） ====================
  nearbySpots: [
    {
      id: 1,
      name: '贾湖遗址展示馆',
      brief: '展示贾湖遗址出土的骨笛、陶器、石器等珍贵文物',
      image: '/images/spots/museum.jpg',
      lat: 33.4210, lng: 113.5810, distance: 120,
      audioUrl: '/audio/museum_intro.mp3',
      duration: 180,
      detail: '贾湖遗址展示馆建于2015年，建筑面积3000平方米，馆内陈列了贾湖遗址历年出土的骨笛、刻符龟甲、陶器、石器等文物共计500余件。展示馆分为"文明曙光""骨笛之乡""稻作源头""契刻之谜"四大展区。'
    },
    {
      id: 2,
      name: 'M282号墓复原区',
      brief: '贾湖骨笛主要出土地，墓主为成年男性，随葬品丰富',
      image: '/images/spots/m282.jpg',
      lat: 33.4215, lng: 113.5805, distance: 200,
      audioUrl: '/audio/m282_intro.mp3',
      duration: 150,
      detail: 'M282号墓是贾湖遗址最重要的墓葬之一，墓中出土了两支完整的七孔骨笛，是迄今为止发现最早的七声音阶乐器。墓主身份可能是部落首领或巫师，随葬品包括骨笛、龟甲、石斧等。'
    },
    {
      id: 3,
      name: '骨笛制作工坊',
      brief: '体验骨笛制作工艺，了解远古乐器的诞生过程',
      image: '/images/spots/workshop.jpg',
      lat: 33.4220, lng: 113.5820, distance: 350,
      audioUrl: '/audio/workshop_intro.mp3',
      duration: 120,
      detail: '骨笛制作工坊是贾湖村的特色体验项目，游客可以在传承人指导下，学习骨笛的制作流程：选材（丹顶鹤尺骨）、钻孔、调音。制作一支完整的骨笛约需3-4小时。'
    },
    {
      id: 4,
      name: '稻作文化展示区',
      brief: '展示贾湖先民8000年前的水稻种植遗迹',
      image: '/images/spots/rice.jpg',
      lat: 33.4205, lng: 113.5830, distance: 420,
      audioUrl: '/audio/rice_intro.mp3',
      duration: 140,
      detail: '贾湖遗址发现了大量碳化稻谷遗存，证实早在8000多年前，贾湖先民已经开始种植水稻。这是中国北方最早的水稻种植证据之一，对研究中国稻作农业起源具有重要意义。'
    },
    {
      id: 5,
      name: '契刻符号墙',
      brief: '贾湖遗址出土的龟甲契刻符号，被认为是汉字的雏形',
      image: '/images/spots/symbols.jpg',
      lat: 33.4212, lng: 113.5815, distance: 180,
      audioUrl: '/audio/symbols_intro.mp3',
      duration: 160,
      detail: '贾湖遗址出土了多片刻有符号的龟甲，这些符号距今约8000年，比甲骨文早4000多年，被认为是汉字的早期源头。符号包括"目"形、"日"形等，具有原始文字的特征。'
    }
  ],

  // ==================== 研学路线（12条） ====================
  studyRoutes: [
    {
      id: 1,
      name: '贾湖骨笛文化深度研学',
      cover: '/images/study/route1.jpg',
      price: 298,
      duration: '2天1晚',
      ageRange: '8-18岁',
      maxPeople: 40,
      tags: ['历史文化', '音乐体验', '动手实践'],
      schedule: [
        { day: 1, items: ['抵达贾湖村，开营仪式', '参观贾湖遗址展示馆', '专家讲座：骨笛的发现与意义', '晚餐+篝火晚会'] },
        { day: 2, items: ['探访骨笛出土地M282号墓', '骨笛制作体验工坊', '学习吹奏骨笛复制品', '结营仪式，颁发研学证书'] }
      ],
      teacher: { name: '王教授', title: '河南省文物考古研究院研究员', avatar: '/images/teachers/wang.jpg' },
      highlights: ['零距离观摩9000年骨笛', '亲手制作骨笛复制品', '获官方研学证书']
    },
    {
      id: 2,
      name: '考古小博士·贾湖探秘之旅',
      cover: '/images/study/route2.jpg',
      price: 358,
      duration: '3天2晚',
      ageRange: '10-16岁',
      maxPeople: 30,
      tags: ['考古体验', '田野调查', '科学探索'],
      schedule: [
        { day: 1, items: ['开营+考古知识课堂', '参观遗址展示馆', '模拟考古发掘体验', '晚间纪录片观影'] },
        { day: 2, items: ['田野调查方法学习', '遗址实地测绘练习', '陶器修复体验', '星空观测+篝火'] },
        { day: 3, items: ['文物整理与记录', '小组研究成果展示', '颁发"考古小博士"证书'] }
      ],
      teacher: { name: '李博士', title: '郑州大学考古系副教授', avatar: '/images/teachers/li.jpg' },
      highlights: ['模拟考古探方发掘', '真实陶器修复体验', '田野科学方法训练']
    },
    {
      id: 3,
      name: '中华音乐之源·骨笛音乐研学',
      cover: '/images/study/route3.jpg',
      price: 268,
      duration: '1天',
      ageRange: '6-15岁',
      maxPeople: 50,
      tags: ['音乐教育', '传统文化', '艺术体验'],
      schedule: [
        { day: 1, items: ['音乐起源课堂', '参观骨笛专题展览', '骨笛吹奏教学', '古乐合奏体验', '汇报演出'] }
      ],
      teacher: { name: '张老师', title: '中国音乐学院音乐史讲师', avatar: '/images/teachers/zhang.jpg' },
      highlights: ['学习吹奏复刻骨笛', '体验古乐合奏', '感受9000年前的旋律']
    },
    {
      id: 4,
      name: '小小农学家·贾湖稻作研学',
      cover: '/images/study/route4.jpg',
      price: 198,
      duration: '1天',
      ageRange: '6-12岁',
      maxPeople: 45,
      tags: ['农业体验', '自然科学', '动手实践'],
      schedule: [
        { day: 1, items: ['稻作文化课堂', '参观碳化稻谷展区', '体验传统水稻种植', '农产品手工制作', '品尝贾湖小米粥'] }
      ],
      teacher: { name: '赵老师', title: '河南农业大学农史研究员', avatar: '/images/teachers/zhao.jpg' },
      highlights: ['了解8000年稻作史', '下田体验传统农耕', '获赠贾湖特色农产品']
    },
    {
      id: 5,
      name: '汉字探源·契刻符号研学',
      cover: '/images/study/route5.jpg',
      price: 238,
      duration: '1天',
      ageRange: '8-14岁',
      maxPeople: 35,
      tags: ['文字起源', '书法体验', '文化传承'],
      schedule: [
        { day: 1, items: ['汉字起源故事课堂', '参观契刻符号墙', '甲骨文/契刻符号临摹', 'DIY文字拓片', '结营作品展示'] }
      ],
      teacher: { name: '刘老师', title: '河南大学古文字学讲师', avatar: '/images/teachers/liu.jpg' },
      highlights: ['触摸汉字8000年演变', '手工制作拓片', '带走自己的文字作品']
    },
    {
      id: 6,
      name: '贾湖文明探源·多学科综合研学',
      cover: '/images/study/route6.jpg',
      price: 498,
      duration: '3天2晚',
      ageRange: '12-18岁',
      maxPeople: 25,
      tags: ['综合研学', '学科融合', '课题研究'],
      schedule: [
        { day: 1, items: ['贾湖文明全景概述', '考古学、音乐学、农学专题课', '遗址实地考察', '选题分组'] },
        { day: 2, items: ['分组课题研究', '实验室分析体验', '数据整理与讨论', '篝火晚会'] },
        { day: 3, items: ['课题成果汇报', '专家点评指导', '颁发综合研学证书'] }
      ],
      teacher: { name: '陈教授', title: '河南省社科院研究员', avatar: '/images/teachers/chen.jpg' },
      highlights: ['多学科交叉学习', '真实课题研究方法', '优秀课题可推荐参赛']
    },
    {
      id: 7,
      name: '非遗传承·骨笛制作技艺研学',
      cover: '/images/study/route7.jpg',
      price: 328,
      duration: '2天1晚',
      ageRange: '10-18岁',
      maxPeople: 20,
      tags: ['非遗技艺', '手工制作', '匠人精神'],
      schedule: [
        { day: 1, items: ['非遗传承人见面会', '骨笛选材与工艺讲解', '钻孔技法学习', '晚间非遗纪录片'] },
        { day: 2, items: ['独立完成骨笛制作', '调音与校准', '吹奏教学', '作品展示+非遗证书'] }
      ],
      teacher: { name: '贾师傅', title: '贾湖骨笛制作技艺非遗传承人', avatar: '/images/teachers/jia.jpg' },
      highlights: ['跟随非遗传承人学习', '独立制作一支骨笛', '获非遗体验证书']
    },
    {
      id: 8,
      name: '贾湖文化+漯河特色一日研学',
      cover: '/images/study/route8.jpg',
      price: 168,
      duration: '1天',
      ageRange: '6-12岁',
      maxPeople: 60,
      tags: ['文化体验', '美食探索', '亲子互动'],
      schedule: [
        { day: 1, items: ['贾湖遗址参观', '骨笛吹奏体验', '漯河特色午餐', '农产品采摘', '亲子手工DIY'] }
      ],
      teacher: { name: '导游小王', title: '金牌研学导师', avatar: '/images/teachers/wang_guide.jpg' },
      highlights: ['寓教于乐', '亲子互动体验', '品尝地道农家美食']
    },
    {
      id: 9,
      name: '数字考古·科技赋能文化遗产研学',
      cover: '/images/study/route9.jpg',
      price: 398,
      duration: '2天1晚',
      ageRange: '14-18岁',
      maxPeople: 20,
      tags: ['科技体验', '数字技术', '创新教育'],
      schedule: [
        { day: 1, items: ['数字考古概论', '3D扫描技术演示', '无人机航拍体验', 'VR/AR技术与文化遗产'] },
        { day: 2, items: ['三维建模实践', '数字文物修复', '成果展示'] }
      ],
      teacher: { name: '吴工', title: '数字化技术工程师', avatar: '/images/teachers/wu.jpg' },
      highlights: ['操作3D扫描仪', '学习三维建模', '体验VR文物修复']
    },
    {
      id: 10,
      name: '贾湖节气文化·农耕智慧研学',
      cover: '/images/study/route10.jpg',
      price: 218,
      duration: '1天',
      ageRange: '6-15岁',
      maxPeople: 40,
      tags: ['节气文化', '农耕体验', '自然教育'],
      schedule: [
        { day: 1, items: ['二十四节气与农耕课堂', '贾湖先民农具参观', '应季农事体验', '节气美食制作', '自然笔记创作'] }
      ],
      teacher: { name: '孙老师', title: '农业文化教育讲师', avatar: '/images/teachers/sun.jpg' },
      highlights: ['了解节气与农耕', '动手体验农事', '品尝节气美食']
    },
    {
      id: 11,
      name: '青少年领导力·贾湖户外拓展研学',
      cover: '/images/study/route11.jpg',
      price: 458,
      duration: '2天1晚',
      ageRange: '12-18岁',
      maxPeople: 30,
      tags: ['户外拓展', '团队协作', '领导力培养'],
      schedule: [
        { day: 1, items: ['团队破冰游戏', '考古探方协作挑战', '户外定向越野', '篝火分享会'] },
        { day: 2, items: ['文化传播方案策划', '小组路演PK', '颁奖+结营'] }
      ],
      teacher: { name: '周教练', title: '青少年素质拓展培训师', avatar: '/images/teachers/zhou.jpg' },
      highlights: ['田野定向越野', '文化传播策划实战', '团队协作能力提升']
    },
    {
      id: 12,
      name: '成人之旅·贾湖文化深度体验',
      cover: '/images/study/route12.jpg',
      price: 328,
      duration: '2天1晚',
      ageRange: '18岁以上',
      maxPeople: 25,
      tags: ['深度体验', '文化思考', '成人研学'],
      schedule: [
        { day: 1, items: ['贾湖文化专题讲座', '遗址深度探访', '非遗传承人对话', '古乐雅集晚会'] },
        { day: 2, items: ['骨笛制作体验', '贾湖小米品鉴', '文化保护研讨会', '结营'] }
      ],
      teacher: { name: '郑研究员', title: '中国社科院考古研究所', avatar: '/images/teachers/zheng.jpg' },
      highlights: ['与顶级专家面对面', '参与文化保护讨论', '高端文化体验']
    }
  ],

  // ==================== 文创商品 ====================
  goods: [
    {
      id: 1,
      name: '贾湖骨笛1:1复刻品（七孔）',
      category: '骨笛复刻',
      price: 598,
      originalPrice: 798,
      image: '/images/goods/flute_replica.jpg',
      images: ['/images/goods/flute_replica_1.jpg', '/images/goods/flute_replica_2.jpg'],
      stock: 50,
      sales: 326,
      desc: '采用丹顶鹤尺骨1:1复刻，七孔设计，经非遗传承人监制，可吹奏简单乐曲。附赠精美礼盒与演奏指南。',
      featured: true
    },
    {
      id: 2,
      name: '贾湖骨笛迷你摆件',
      category: '骨笛复刻',
      price: 128,
      originalPrice: 168,
      image: '/images/goods/flute_mini.jpg',
      images: ['/images/goods/flute_mini_1.jpg'],
      stock: 200,
      sales: 1560,
      desc: '精致迷你骨笛摆件，黄铜材质，仿古做旧工艺，配木质底座。适合书桌、博古架装饰。',
      featured: true
    },
    {
      id: 3,
      name: '贾湖文化金属书签套装',
      category: '文化书签',
      price: 39,
      originalPrice: 49,
      image: '/images/goods/bookmark_metal.jpg',
      images: [],
      stock: 500,
      sales: 2300,
      desc: '一套4枚，分别为骨笛、契刻符号、陶器纹样、稻谷图案，金属镂空工艺，配流苏。',
      featured: true
    },
    {
      id: 4,
      name: '契刻符号帆布包',
      category: '特色服饰',
      price: 79,
      originalPrice: 99,
      image: '/images/goods/bag_symbol.jpg',
      images: [],
      stock: 150,
      sales: 890,
      desc: '纯棉帆布包，印制贾湖契刻符号图案，原创设计，超大容量。文艺青年必备。',
      featured: true
    },
    {
      id: 5,
      name: '贾湖骨笛造型钢笔',
      category: '文具',
      price: 168,
      originalPrice: 218,
      image: '/images/goods/pen_flute.jpg',
      images: [],
      stock: 100,
      sales: 420,
      desc: '钢笔笔身采用骨笛造型设计，铜质烤漆，书写流畅。礼盒装，适合作为文化伴手礼。',
      featured: false
    },
    {
      id: 6,
      name: '贾湖遗址明信片套装',
      category: '文具',
      price: 25,
      originalPrice: 30,
      image: '/images/goods/postcard.jpg',
      images: [],
      stock: 1000,
      sales: 3500,
      desc: '一套12张，精选贾湖遗址经典文物与遗址风貌摄影作品，背面有简短文物介绍。',
      featured: false
    },
    {
      id: 7,
      name: '骨笛纹样丝巾',
      category: '特色服饰',
      price: 158,
      originalPrice: 198,
      image: '/images/goods/scarf.jpg',
      images: [],
      stock: 80,
      sales: 245,
      desc: '100%桑蚕丝，以骨笛与贾湖纹饰为设计元素，优雅大方，多种系法。文创送礼首选。',
      featured: false
    },
    {
      id: 8,
      name: '贾湖文化冰箱贴套装',
      category: '文化书签',
      price: 35,
      originalPrice: 45,
      image: '/images/goods/magnet.jpg',
      images: [],
      stock: 300,
      sales: 1200,
      desc: '一套6枚软胶冰箱贴，Q版贾湖元素设计：骨笛、陶罐、稻谷、龟甲、考古铲、小陶人。',
      featured: false
    }
  ],

  // ==================== 民宿房源 ====================
  homestays: [
    {
      id: 1,
      name: '贾湖农家小院',
      image: '/images/homestay/farmhouse.jpg',
      images: [],
      price: 128,
      type: '农家小院',
      capacity: 4,
      rooms: 2,
      beds: '2张双人床',
      facilities: ['WiFi', '空调', '独立卫浴', '农家早餐', '免费停车'],
      desc: '位于贾湖村中心，步行至遗址展示馆仅需5分钟。传统农家院落，体验地道乡村生活。房东会做正宗漯河农家菜。',
      lat: 33.4215, lng: 113.5808,
      rating: 4.8,
      reviews: 126
    },
    {
      id: 2,
      name: '湖畔民宿·稻香居',
      image: '/images/homestay/lake.jpg',
      images: [],
      price: 268,
      type: '精品民宿',
      capacity: 2,
      rooms: 1,
      beds: '1张大床',
      facilities: ['WiFi', '空调', '湖景阳台', '独立卫浴', '免费早餐', '茶室'],
      desc: '精品湖景民宿，推开窗就是稻田风光。一房一厅设计，私密舒适。提供免费自行车骑行。',
      lat: 33.4220, lng: 113.5830,
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: '古村客栈',
      image: '/images/homestay/inn.jpg',
      images: [],
      price: 188,
      type: '传统客栈',
      capacity: 6,
      rooms: 3,
      beds: '3张双人床',
      facilities: ['WiFi', '空调', '独立卫浴', '厨房', '庭院', '烧烤架'],
      desc: '由传统民居改造的客栈，保留了老房子的木梁结构。三个独立房间，适合家庭或小团体出行。',
      lat: 33.4210, lng: 113.5805,
      rating: 4.7,
      reviews: 203
    }
  ],

  // ==================== 用户信息（模拟） ====================
  userInfo: {
    nickName: '贾湖文化爱好者',
    avatarUrl: '/images/default-avatar.png',
    phone: '138****8888'
  },

  // ==================== 系统常量 ====================
  orderStatusMap: {
    0: '待付款',
    1: '已付款',
    2: '已发货',
    3: '已完成',
    4: '已取消'
  },

  categories: ['全部', '骨笛复刻', '文化书签', '特色服饰', '文具']
}

// 模拟网络延迟请求
function mockRequest(data, delay = 300) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ code: 0, data, message: 'ok' })
    }, delay)
  })
}

// 模拟分页请求
function mockPageRequest(list, page = 1, pageSize = 10, delay = 300) {
  const start = (page - 1) * pageSize
  const items = list.slice(start, start + pageSize)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 0,
        data: {
          list: items,
          total: list.length,
          page,
          pageSize,
          hasMore: start + pageSize < list.length
        },
        message: 'ok'
      })
    }, delay)
  })
}

module.exports = {
  MOCK,
  mockRequest,
  mockPageRequest
}
