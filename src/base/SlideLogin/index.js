// 导入组件
import slideLogin from './SlideLogin.vue'

// 为组件提供 install 安装方法，供按需引入
slideLogin.install = function (Vue) {
  Vue.component(slideLogin.name, slideLogin)
}

// 默认导出组件
export default slideLogin