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
         * 点击事件
         */
        onClick(e) {
          const { index } = e.currentTarget.dataset
          this.onOpenSelect(index)
        },

        /**
         * 打开下拉框
         */
        onOpenSelect(index) {
          this.setData({
            [`filterbar.areaVisible`]: false,
          })
          this.page.data.filterbar.items.forEach((n, i) => {
            if (index == 0 && this.page.data.filterbar.barIndex==index) {
              this.setData({
                [`filterbar.areaVisible`]: true,
              })
            } else {              
              if (this.page.data.filterbar.areaVisible) {
                this.setData({
                  [`filterbar.areaVisible`]: false,
                })
              }
            }
          })
        },

        clickLeftTab(e) {
          const { index } = e.currentTarget.dataset
          this.page.data.filterbar.countryIndex = index
          this.setData({
            [`filterbar.countryIndex`]: index,
            [`filterbar.provinceIndex`]: 0,
            [`filterbar.cityIndex`]: 0
          })
        },

        clickMiddleTab(e) {
          const { index } = e.currentTarget.dataset
          this.page.data.filterbar.provinceIndex = index
          this.setData({
            [`filterbar.provinceIndex`]: index,
            [`filterbar.cityIndex`]: 0
          })
        },

        clickRightTab(e) {
          const { index } = e.currentTarget.dataset
          this.page.data.filterbar.cityIndex = index
          this.setData({
            [`filterbar.cityIndex`]: index,
            [`filterbar.areaVisible`]: false,
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
    return component
  }
}
