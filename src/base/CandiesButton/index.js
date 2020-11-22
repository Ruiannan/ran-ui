// 导入组件
import candiesButton from './CandiesButton.vue'

// 为组件提供 install 安装方法，供按需引入
candiesButton.install = function (Vue) {
  Vue.component(candiesButton.name, candiesButton)
}

// 默认导出组件
export default candiesButton