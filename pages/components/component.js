/**
 * 模块化组件
 */
class Component {
  constructor(options = {}) {
    Object.assign(this, { options })
    this.__init()
  }

  /**
   * 初始化
   */
  __init() {
    this.page = getCurrentPages()[getCurrentPages().length - 1]
    const setData = this.page.setData.bind(this.page)

    const checkSDKVersion = () => {
      let has = false;
      try {
        const res = wx.getSystemInfoSync()
        const SDKVersion = res.SDKVersion.split('.')
        has = Number(SDKVersion[0]) > 1 || Number(SDKVersion[1]) >= 5
      } catch (e) { }

      return has
    }

    /**
     * 重写 setData 方法
     */
    this.setData = (obj = {}, cb = () => ({})) => {
      const fn = () => {
        if (typeof cb === 'function') {
          cb()
        }
      }

      if (checkSDKVersion()) {
        setData(obj, fn)
      } else {
        setData(obj)
        setTimeout(fn, 0)
      }
    }

    this.__initState()
  }

  /**
   * 初始化组件状态
   */
  __initState() {
    this.options.data && this.__initData()
    this.options.methods && this.__initMethods()
  }

  /**
   * 绑定组件动态数据
   */
  __initData() {
    const scope = this.options.scope
    const data = this.options.data

    this._data = {}

    //筛选非函数类型，更改参数中函数的 this 指向
    if (!this.isEmptyObject(data)) {
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          if (typeof data[key] === 'function') {
            data[key] = data[key].bind(this)
          } else {
            this._data[key] = data[key]
          }
        }
      }
    }

    //将数据同步到 page.data 上面，方便渲染组件
    this.page.setData({
      [`${scope}`]: this._data,
    })
  }

  /**
   * 绑定组件事件函数
   */
  __initMethods() {
    const scope = this.options.scope
    const methods = this.options.methods

    //筛选函数类型
    if (!this.isEmptyObject(methods)) {
      for (let key in methods) {
        if (methods.hasOwnProperty(key) && typeof methods[key] === `function`) {
          this[key] = methods[key] = methods[key].bind(this)

          this.page[`${scope}.${key}`] = methods[key]
          this.setData({
            [`${scope}.${key}`]: `${scope}.${key}`,
          })
        }
      }
    }
  }

  /**
   * 获取组件的 data 数据
   */
  getComponentData() {
    let data = this.page.data
    let name = this.options.scope && this.options.scope.split(`.`)
    name.forEach((n, i) => {
      data = data[n]
    })
    return data
  }

  isEmptyObject(e) {
    for (let t in e) {
      return !1
    }
    return !0
  }
}

/**
 * export 对应 的 import 需要知道 export 抛出的变量名和函数名；
 * export default 对应的 import 不需要知道 export 抛出的变量名和或函数名
 */
export default Component

/**
 * ES6 引入了 class 的概念，可以看作是一个语法糖
 */




