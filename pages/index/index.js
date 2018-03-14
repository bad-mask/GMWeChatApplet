//index.js
//获取应用实例
import { $filterBar } from '../components/router'

Page({
  data: {
    items: [
      {
        type: 'radio',
        label: '全部地区',
        value: '全部地区',
        groups: ['001'],
      },
      {
        type: 'radio',
        label: '全部项目',
        value: '全部项目',
        groups: ['002'],
      },
      {
        type: 'radio',
        label: '智能推荐',
        value: '智能推荐',
        groups: ['003'],
      }
    ],
    countryIndex: 0,
    provinceIndex: 0,
    cityIndex: 0,
    areaVisible:false,
    projectVisible:false,
    barIndex:0,
    areas: [
      {
        name: '全部地区1',
        id: 'worldwide',
        provinces: [
          {
            name: '全部地区',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '全部地区',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '全部地区',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '全部地区',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '全部地区',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '全部地区',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '全部地区',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '全部地区',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '全部地区',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '全部地区',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '全部地区',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '全部地区',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '全部地区',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '安徽',
            id: '262',
            cities: [
              {
                name: '安徽全部',
                id: '262',
              },
              {
                name: '蚌埠',
                id: '329',
              },
              {
                name: '豪州',
                id: '335',
              },
              {
                name: '蚌埠',
                id: '3291',
              },
              {
                name: '豪州',
                id: '3352',
              },
              {
                name: '蚌埠',
                id: '3293',
              },
              {
                name: '豪州',
                id: '3354',
              },
              {
                name: '蚌埠',
                id: '3295',
              },
              {
                name: '豪州',
                id: '3356',
              },
            ],
          }
        ],
      },
      {
        name: '全部地区2',
        id: 'worldwide',
        provinces: [
          {
            name: '全部地区2',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '安徽',
            id: '262',
            cities: [
              {
                name: '安徽全部',
                id: '2627',
              },
              {
                name: '蚌埠',
                id: '3298',
              },
              {
                name: '豪州',
                id: '3359',
              },
              {
                name: '蚌埠',
                id: '3290',
              },
              {
                name: '豪州',
                id: '3350',
              },
              {
                name: '蚌埠',
                id: '3299',
              },
              {
                name: '豪州',
                id: '3385',
              },
              {
                name: '蚌埠',
                id: '3279',
              },
              {
                name: '豪州',
                id: '3365',
              },
            ],
          }
        ],
      },
      {
        name: '全部地区3',
        id: 'worldwide',
        provinces: [
          {
            name: '全部地区3',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '安徽',
            id: '262',
            cities: [
              {
                name: '安徽全部',
                id: '2652',
              },
              {
                name: '蚌埠',
                id: '3249',
              },
              {
                name: '豪州',
                id: '3335',
              },
              {
                name: '蚌埠',
                id: '3239',
              },
              {
                name: '豪州',
                id: '3325',
              },
              {
                name: '蚌埠',
                id: '3219',
              },
              {
                name: '豪州',
                id: '3135',
              },
              {
                name: '蚌埠',
                id: '3229',
              },
              {
                name: '豪州',
                id: '3335',
              },
            ],
          }
        ],
      },
      {
        name: '全部地区4',
        id: 'worldwide',
        provinces: [
          {
            name: '全部地区4',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '安徽',
            id: '2462',
            cities: [
              {
                name: '安徽全部',
                id: '2562',
              },
              {
                name: '蚌埠',
                id: '36269',
              },
              {
                name: '豪州',
                id: '3353',
              },
              {
                name: '蚌埠',
                id: '3729',
              },
              {
                name: '豪州',
                id: '3835',
              },
              {
                name: '蚌埠',
                id: '3929',
              },
              {
                name: '豪州',
                id: '3035',
              },
              {
                name: '蚌埠',
                id: '1329',
              },
              {
                name: '豪州',
                id: '2335',
              },
            ],
          }
        ],
      },
      {
        name: '全部地区5',
        id: 'worldwide',
        provinces: [
          {
            name: '全部地区5',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '安徽',
            id: '4262',
            cities: [
              {
                name: '安徽全部',
                id: '5262',
              },
              {
                name: '蚌埠',
                id: '6329',
              },
              {
                name: '豪州',
                id: '7335',
              },
              {
                name: '蚌埠',
                id: '8329',
              },
              {
                name: '豪州',
                id: '9335',
              },
              {
                name: '蚌埠',
                id: '29',
              },
              {
                name: '豪州',
                id: '35',
              },
              {
                name: '蚌埠',
                id: '39',
              },
              {
                name: '豪州',
                id: '33',
              },
            ],
          }
        ],
      },
      {
        name: '全部地区3',
        id: 'worldwide',
        provinces: [
          {
            name: '全部地区3',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '安徽',
            id: '26221',
            cities: [
              {
                name: '安徽全部',
                id: '26223',
              },
              {
                name: '蚌埠',
                id: '32924',
              },
              {
                name: '豪州',
                id: '33534',
              },
              {
                name: '蚌埠',
                id: '32935',
              },
              {
                name: '豪州',
                id: '33556',
              },
              {
                name: '蚌埠',
                id: '32967',
              },
              {
                name: '豪州',
                id: '33568',
              },
              {
                name: '蚌埠',
                id: '32969',
              },
              {
                name: '豪州',
                id: '33560',
              },
            ],
          }
        ],
      },
      {
        name: '全部地区4',
        id: 'worldwide',
        provinces: [
          {
            name: '全部地区4',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '安徽',
            id: '26221',
            cities: [
              {
                name: '安徽全部',
                id: '26223',
              },
              {
                name: '蚌埠',
                id: '32924',
              },
              {
                name: '豪州',
                id: '33525',
              },
              {
                name: '蚌埠',
                id: '32926',
              },
              {
                name: '豪州',
                id: '335272',
              },
              {
                name: '蚌埠',
                id: '32957',
              },
              {
                name: '豪州',
                id: '33558',
              },
              {
                name: '蚌埠',
                id: '32959',
              },
              {
                name: '豪州',
                id: '33579',
              },
            ],
          }
        ],
      },
      {
        name: '全部地区5',
        id: 'worldwide',
        provinces: [
          {
            name: '全部地区5',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '安徽',
            id: '26232',
            cities: [
              {
                name: '安徽全部',
                id: '262323',
              },
            ],
          }
        ],
      },
      {
        name: '全部地区5',
        id: 'worldwide',
        provinces: [
          {
            name: '全部地区5',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '安徽',
            id: '11262',
            cities: [
              {
                name: '安徽全部',
                id: '12262',
              },
            ],
          }
        ],
      },
      {
        name: '全部地区5',
        id: 'worldwide',
        provinces: [
          {
            name: '全部地区5',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '安徽',
            id: '13262',
            cities: [
              {
                name: '安徽全部',
                id: '14262',
              },
            ],
          }
        ],
      },
      {
        name: '全部地区5',
        id: 'worldwide',
        provinces: [
          {
            name: '全部地区5',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '安徽',
            id: '24262',
            cities: [
              {
                name: '安徽全部',
                id: '25262',
              },
            ],
          }
        ],
      },
      {
        name: '全部地区5',
        id: 'worldwide',
        provinces: [
          {
            name: '全部地区5',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '安徽',
            id: '26262',
            cities: [
              {
                name: '安徽全部',
                id: '26262',
              },
            ],
          }
        ],
      },
      {
        name: '全部地区5',
        id: 'worldwide',
        provinces: [
          {
            name: '全部地区5',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '安徽',
            id: '27262',
            cities: [
              {
                name: '安徽全部',
                id: '28262',
              },
            ],
          }
        ],
      },
      {
        name: '全部地区5',
        id: 'worldwide',
        provinces: [
          {
            name: '全部地区5',
            id: 'worldwide',
            cities: [
              {
                name: '全部城市',
                id: 'worldwide',
              },
            ],
          },
          {
            name: '安徽',
            id: '262',
            cities: [
              {
                name: '安徽全部',
                id: '29262',
              },
            ],
          }
        ],
      }
    ],
    components: [
      {
        title: '【近视矫正】同仁主任亲自操刀，还你清晰美好“视界”',
        url: '/pages/actionsheet/index',
        service_img: 'http://hera.s.igengmei.com/service/2015/06/25/671cb7b167-half',
        gengmei_price: '3600',
        sell_amount: '已预约39',
      }, {
        title: '【瘦脸针】小脸自拍无需耍心机，靠前也自信！',
        url: '/pages/backdrop/index',
        service_img: 'http://hera.s.igengmei.com/service/2015/04/23/5e3d19b169-half',
        gengmei_price: '136',
        sell_amount: '已预约934',
      },
      {
        title: '【自体脂肪面部填充】脸颊嘭嘭~嘭起来~',
        url: '/pages/barcode/index',
        service_img: 'http://hera.s.igengmei.com/service/2015/03/16/5edc65de0a-half',
        gengmei_price: '70',
        sell_amount: '已预约912',
      },
      {
        title: '【射频除皱】午餐美容，快速解决松皱！',
        url: '/pages/button/index',
        service_img: 'http://hera.s.igengmei.com/service/2015/07/15/10db5af8d1-half',
        gengmei_price: '53600',
        sell_amount: '已预约79',
      },
      {
        title: '【假体隆下巴】勾勒精致轮廓，塑造俏皮挺立下巴！',
        url: '/pages/calendar/index',
        service_img: 'http://hera.s.igengmei.com/service/2015/03/31/48555431ab-half',
        gengmei_price: '460',
        sell_amount: '已预约98',
      },
      {
        title: '【北京@连喜艳】瘦腿针（300单位）',
        url: '/pages/countdown/index',
        service_img: 'http://hera.s.igengmei.com/service/2015/06/03/413772eccf-half',
        gengmei_price: '870',
        sell_amount: '已预约99',
      },
      {
        title: '【北京@郑宗梅】唇部整形',
        url: '/pages/countup/index',
        service_img: 'http://hera.s.igengmei.com/service/2015/05/04/0c546e6c3d-half',
        gengmei_price: '980',
        sell_amount: '已预约934',
      },
      {
        title: '【北京@圣贝口腔】进口纳米树脂补牙',
        url: '/pages/dialog/index',
        service_img: 'http://hera.s.igengmei.com/service/2015/05/13/4a5f504da6-half',
        gengmei_price: '480',
        sell_amount: '已预约129',
      },
      {
        title: '【补牙】采用进口纳米树脂补牙材料，耐磨有光泽',
        url: '/pages/filterbar/index',
        service_img: 'http://hera.s.igengmei.com/service/2015/03/12/93f30b1cc1-half',
        gengmei_price: '860',
        sell_amount: '已预约329',
      },
      {
        title: '【北京@连喜艳】瘦腿针（300单位）',
        url: '/pages/countdown/index',
        service_img: 'http://hera.s.igengmei.com/service/2015/06/03/413772eccf-half',
        gengmei_price: '260',
        sell_amount: '已预约945',
      },
      {
        title: '【北京@郑宗梅】唇部整形',
        url: '/pages/countup/index',
        service_img: 'http://hera.s.igengmei.com/service/2015/05/04/0c546e6c3d-half',
        gengmei_price: '480',
        sell_amount: '已预约934',
      },
      {
        title: '【北京@圣贝口腔】进口纳米树脂补牙',
        url: '/pages/dialog/index',
        service_img: 'http://hera.s.igengmei.com/service/2015/05/13/4a5f504da6-half',
        gengmei_price: '960',
        sell_amount: '已预约923',
      },
      {
        title: '【北京@连喜艳】瘦腿针（300单位）',
        url: '/pages/countdown/index',
        service_img: 'http://hera.s.igengmei.com/service/2015/06/03/413772eccf-half',
        gengmei_price: '1360',
        sell_amount: '已预约9',
      },
      {
        title: '【北京@郑宗梅】唇部整形',
        url: '/pages/countup/index',
        service_img: 'http://hera.s.igengmei.com/service/2015/05/04/0c546e6c3d-half',
        gengmei_price: '1080',
        sell_amount: '已预约91',
      },
      {
        title: '【补牙】采用进口纳米树脂补牙材料，耐磨有光泽',
        url: '/pages/filterbar/index',
        service_img: 'http://hera.s.igengmei.com/service/2015/03/12/93f30b1cc1-half',
        gengmei_price: '860',
        sell_amount: '已预约329',
      },
      {
        title: '【北京@连喜艳】瘦腿针（300单位）',
        url: '/pages/countdown/index',
        service_img: 'http://hera.s.igengmei.com/service/2015/06/03/413772eccf-half',
        gengmei_price: '1360',
        sell_amount: '已预约9',
      },
    ],
  },
  onLoad: function () {
    this.$filterBar = $filterBar.init({
      items: this.data.items,
      areas: this.data.areas,
      countryIndex: this.data.countryIndex,
      provinceIndex: this.data.provinceIndex,
      cityIndex: this.data.cityIndex,
      areaVisible: this.data.areaVisible,
      projectVisible: this.data.projectVisible,
      barIndex: this.data.barIndex,   
      onChangeArea: (countryIndex, provinceIndex, cityIndex) => {
        wx.showToast({
          title: '点击了筛选器' + countryIndex + provinceIndex + cityIndex,
          icon: 'none',
          duration: 1000
        })
      }

    })
  },
  
  onSearchCom: function (e) {
    wx.showToast({
      title: '点击了搜索框',
      icon: 'none',
      duration: 1000
    })
  },

})
