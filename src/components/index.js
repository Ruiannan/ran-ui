const components = {
  install(Vue){
    Vue.components('ranCandiesButton',()=>import('./CandiesButton/CandiesButton.vue'))
  }
}

// 重要的判断
if(typeof window !== 'undefined' && window.Vue){
  window.Vue.use(components)
}

// 导出组件库，暴露给调用者
export default components