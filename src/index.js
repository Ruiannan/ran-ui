import CandiesButton from './base/CandiesButton'
import SlideLogin from './base/SlideLogin'

const components = [
  CandiesButton,
  SlideLogin
]

const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

// 重要的判断
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// 导出组件库，暴露给调用者
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 具体的组件列表
  CandiesButton,
  SlideLogin
}