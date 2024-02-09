import { ElLoading, ElMessage } from "element-plus";
import router from "@/router";

// 设置加载动画并对应导航跳转
function Loading(types, messages, navigation){
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    message({
        type: types,
        duration:1500,
        message: messages
    })
    setTimeout(() => {
        loading.close()
        router.push(navigation)
    }, 1000)
}


let messageDom = null
const resetMessage = (options) => {
    if (messageDom) messageDom.close() // 判断弹窗是否已存在,若存在则关闭
    messageDom = ElMessage(options)
}
const typeArr = ['success', 'error', 'warning', 'info']
typeArr.forEach(type => {
    resetMessage[type] = options => {
        if (typeof options === 'string') options = {message: options }
        options.type = type
        return resetMessage(options)
    }
})
const message = resetMessage

export {
    Loading,
    message
}