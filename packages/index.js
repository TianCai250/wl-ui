//整个包的入口
//定义install方法，接收Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
//统一导出
import Button from './button'

const components = [
    Button
]

const install = function(Vue) {
    //全局注册所有组件
    components.forEach(item => {
        Vue.component(item.name,item)
    })
}

//判断是否是直接引入文件，如果是，就不用调用Vue.use()
if(typeof window !=='undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install
}