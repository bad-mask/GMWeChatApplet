//index.js
//获取应用实例
import { $filterBar } from '../components/router'

Page({
  data: {
    items: [
      {
        type: 'radio',
        label: 'Updated',
        value: 'updated',
        children: [{
          label: 'Recently updated',
          value: 'desc',
        },
        {
          label: 'Least recently updated',
          value: 'asc',
        },
        ],
        groups: ['001'],
      },
      {
        type: 'text',
        label: 'Forks',
        value: 'forks',
        groups: ['002'],
      },
      {
        type: 'sort',
        label: 'Stars',
        value: 'stars',
        groups: ['003'],
      }
    ],
    type: `grid`,
    components: [{
      title: '【近视矫正】同仁主任亲自操刀，还你清晰美好“视界”',
      url: '/pages/actionsheet/index',
      service_img: 'http://hera.s.igengmei.com/service/2015/06/25/671cb7b167-half',
      gengmei_price: '3600',
      sell_amount: '已预约39',
    },
    {
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
      onChange: (checkedItems, items) => {
        console.log(this, checkedItems, items)

        const params = {}

        checkedItems.forEach((n) => {
          if (n.checked) {
            if (n.value === 'update') {
              const selected = n.children.filter((n) => n.checked).map((n) => n.value).join(' ')
              params.sort = n.value
              params.order = selected
            } else if (n.value === 'stars') {
              params.sort = n.value
              params.order = n.sort === 1 ? 'asc' : 'desc'
            } else if (n.value === 'forks') {
              params.sort = n.value
            } else if (n.value === 'filter') {
              n.children.filter((n) => n.selected).forEach((n) => {
                if (n.value === 'language') {
                  const selected = n.children.filter((n) => n.checked).map((n) => n.value).join(' ')
                  params.language = selected
                } else if (n.value === 'query') {
                  const selected = n.children.filter((n) => n.checked).map((n) => n.value).join(' ')
                  params.query = selected
                }
              })
            }
          }
        })

        this.getRepos(params)
      },
    })
    this.getRepos()
  },
  getRepos(params = {}) {
    const language = params.language || 'javascript'
    const query = params.query || 'react'
    const q = `${query}+language:${language}`
    const data = Object.assign({
      q,
    }, params)

    this.$filterBar.onCloseSelect()

    wx.showLoading()
    wx.request({
      url: `http://api.github.com/search/repositories`,
      data,
      success: (res) => {
        console.log(res)

        wx.hideLoading()

        this.setData({
          repos: res.data.items.map((n) => Object.assign({}, n, {
            date: n.created_at.substr(0, 7),
          })),
        })
      },
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
