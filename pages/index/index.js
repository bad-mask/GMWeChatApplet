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
    ]
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
