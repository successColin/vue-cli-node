const throttle = require('comutils/throttle')  // 节流函数
const resize = (calback, delay) => {
  window.addEventListener('resize', throttle(calback, delay));
}

export default resize