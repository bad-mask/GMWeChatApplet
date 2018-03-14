// pages/components/filterbar/filterbar.js
import Component from '../component'

export default {
  init(opts = {}) {
    const options = Object.assign({}, opts)

    //实例化组件
    const component = new Component({
      scope: `filterbar`,
      data: options,

      methods: {

        /**
         * 隐藏
         */
        hide() {
          if (this.removed) return !1
          this.removed = !0
          this.setHidden()
        },
        /**
         * 显示
         */
        show() {
          if (this.removed) return !1
          this.setVisible()
        },
        /**
         * 点击事件
         */
        onClick(e) {
          const { index } = e.currentTarget.dataset
          this.onOpenSelect(this.page.data.filterbar.items, index)
        },

        /**
         * 下拉框内单项选择触发 change 事件
         */
        radioChange(e) {
          const { value } = e.detail
          const { index, item } = e.currentTarget.dataset
          const children = item.children.map((n) => Object.assign({}, n, {
            checked: n.value == value,
          }))
          this.setData({
            [`filterbar.items[${index}].children`]: children,
          }, this.onChange)
        },
        /**
         * 打开下拉框
         */
        onOpenSelect(data = [], index = 0) {
          const current = data[index]
          const items = data.map((n, i) => {
            const params = Object.assign({}, n, {
              checked: index === i ? !n.checked : false,
            })

            //判断已选择的元素是否同组
            if (n.checked) {
              const has = this.getDifference(n.groups, current.groups)
              params.checked = !!has.length
              // 判断非同组的元素清空选择内容
              if (index !== i && !has.length) {

                if (typeof params.children === 'object') {

                  if (['radio', 'checkbox'].includes(n.type)) {
                    params.children = params.children.map((n) => Object.assign({}, n, {
                      checked: false,
                    }))
                  }
                }

                if (['radio'].includes(n.type)) {
                  params.radio = undefined
                }
              }
            }

            //展开或隐藏下拉框
            if (['radio', 'checkbox'].includes(n.type)) {
              params.visible = index === i ? !n.visible : false
            }

            //当前点击排序做出处理
            if (index === i && ['radio'].includes(n.type)) {
              params.radio = typeof params.radio === 'number' ? -params.radio : 1
            }

            return params
          })

          this.setData({ [`filterbar.items`]: items, }, () => {
            if (!['radio'].includes(current.type)) {
              this.onChange()
            }
          })
        },
        /**
         * 关闭下拉框
         */
        onCloseSelect() {
          const items = this.page.data.filterbar.items
          const params = {}

          items.forEach((n, i) => {
            if (n.checked && n.visible) {
              params[`filterbar.items[${i}].visible`] = false
            }
          })

          this.setData(params)
        },
        /**
         * 获取两个数组相同的元素
         */
        getDifference(data = [], values = []) {
          return data.filter(v => values.includes(v))
        },
        /**
         * 元素发生变化时的事件
         */
        onChange() {
          const items = this.page.data.filterbar.items
          const checkedItems = items.filter((n) => n.checked)
          if (typeof options.onChange === 'function') {
            options.onChange.call(this, checkedItems, items)
          }
        },

        clickLeftTab(e) {
          const { index } = e.currentTarget.dataset
          this.page.data.filterbar.countryIndex = index
          this.setData({
            [`filterbar.countryIndex`]: index,
            [`filterbar.provinceIndex`]: 0,
            [`filterbar.cityIndex`]: 0
          }, this.onChangeArea)
        },

        clickMiddleTab(e) {
          const { index } = e.currentTarget.dataset
          this.page.data.filterbar.provinceIndex = index
          this.setData({
            [`filterbar.provinceIndex`]: index,
            [`filterbar.cityIndex`]: 0
          }, this.onChangeArea)
        },

        clickRightTab(e) {
          const { index } = e.currentTarget.dataset
          this.page.data.filterbar.cityIndex = index
          this.setData({
            [`filterbar.cityIndex`]: index,
          }, this.onChangeArea)
        },

        onChangeArea() {
          const countryIndex = this.page.data.filterbar.countryIndex
          const provinceIndex = this.page.data.filterbar.provinceIndex
          const cityIndex = this.page.data.filterbar.cityIndex
          const indexs = { countryIndex, provinceIndex, cityIndex }
          console.log(indexs)
          options.onChangeArea.call(this, countryIndex, provinceIndex, cityIndex)
        },
      },
    })

    component.show()

    return component
  }
}
