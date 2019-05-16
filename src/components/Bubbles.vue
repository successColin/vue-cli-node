<template>
  <canvas id="canvas" @click="handleClick"></canvas>
</template>
<script>
require('comutils/animationFrame')()  // AnimationFrame简单兼容hack
import resize from '../util/resize'
const copyObj = require('comutils/copyObj')  // 对象合并/深浅拷贝

export default {
  name: 'bubblesEffect',
  data () {
    return {
      circles: [],   // 圆
      requestAniId: null,
      uname: '',
      upwd: ''
    }
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    opts () {
      return copyObj({}, {
        color: 'rgba(225,225,225,0.5)',
        radius: 15,
        densety: 0.3,
        clearOffset: 0.2
      }, this.options)
    }
  },
  methods: {
    handleClick () {
      console.log(1)
    },
    randomColor () {
      let r = Math.floor(Math.random() * 255)
      let g = Math.floor(Math.random() * 255)
      let b = Math.floor(Math.random() * 255)
      let alpha = Math.random().toPrecision(2)
      let rgba = `rgba(${r}, ${g}, ${b}, ${alpha})`
      return rgba
    }
  },
  mounted () {
    let width, height, canvas, ctx, circles = [], settings = this.opts, that = this
    initContainer()

    function initContainer () {
      width = window.innerWidth
      height = window.innerHeight
      canvas = document.getElementById('canvas')
      canvas.width = width
      canvas.height= height
      ctx = canvas.getContext('2d')
      for (let x = 0;x < width * settings.densety; x++) {
        let c = new Circle()
        circles.push(c)
      }
      animate()
    }

    function animate () {
      cancelAnimationFrame(self.requestAniId)
      ctx.clearRect(0, 0, width, height)
      for (let i in circles) {
        circles[i].draw()
      }
      self.requestAniId = requestAnimationFrame(animate)
    }

    function Circle () {
      var self = this
      this.pos ={}
      init()

      function init () {
        self.pos.x = Math.random() * width    // 开始画圆开始位置 x
        self.pos.y = height + Math.random() * 100  // 开始画圆开始位置 y
        self.alpha = 0.1 + Math.random() * settings.clearOffset  // 透明度
        self.scale = 0.1 + Math.random() * 0.3
        self.speed = Math.random()  // 速度
        self.color = settings.color === 'random' ? that.randomColor() : settings.color  // 颜色
      }

      this.draw = function () {
        if (self.alpha <= 0) {
          init()
        }
        self.pos.y -= self.speed
        self.alpha -= 0.0005
        ctx.beginPath()
        ctx.arc(self.pos.x, self.pos.y, self.scale * settings.radius, 0, 2 * Math.PI, false)
        ctx.fillStyle = self.color
        ctx.fill()
        ctx.closePath()
      }
      // this.draw 结束
    }

    resize( ()=> {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    })
  },
  beforeDestroy () {
    cancelAnimationFrame(this.requestAniId)
  }
}
</script>
<style lang="scss" scoped>
  #canvas {
    position: absolute;
    top: 0;
    left: 0;
    background:black;
  }
  .login {
    width: 100%;
    border-radius: 5px;
    background: white;
    ul {
      margin: 10px 10px 10px 10px;
      li{
        list-style: none;
        margin-top: 10px;
      }
      li:first-child {
        font-weight: 800px;
        font-size: 20px;
      }
      li:nth-child(6) {
        float: right;
        span {
          margin-right: 10px;
        }
      }
    }
  }
  .secret {
    width: 100%;
    height: 50px;
    font-size: 40px;
    font-family: "Hiragino Sans GB";
    color: white;
    margin-bottom: 10px;
    text-align: center;
  }
  .el-col {
    border-radius: 4px;
    min-height: 36px;
  }
  .el-row {
    margin-top: 13rem;
  }
</style>
