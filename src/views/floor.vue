<template>
  <div class="container">
    <div class="section" v-for="(item, index) in page" :key="'page'+index" :style="{'height': 'page' + index === 'page' + 0 ? '2000px': '500px'}">
      <div style="text-align: center;line-height: 500px;" :style="{'background': item.background}">
        <div>
          {{item.name}}
          <el-button v-show="index === 0">跳出新页面{{index}}</el-button>
        </div>
      </div>
    </div>
    <ul class="ulName">
      <li v-for="(item, index) in floor" :key="'floor'+index" @click="jump(index)" class="liName" :class="index === 1 ? 'current' : ''">
        {{item}}
      </li>
    </ul>
    <div class="drop">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      scroll: '',
      page: [
        {name: '楼层a', background: 'red'},
        {name: '楼层b', background: 'yellow'},
        {name: '楼层c', background: 'green'},
        {name: '楼层d', background: 'blue'},
      ],
      floor: ['a','b','c','d']
    }
  },
  watch: {
    scroll: function() {
      this.loadSroll()
    }
  },
  methods: {
    loadSroll: function() {
      var self = this
      // console.log(self)
      // ulName 点击楼层
      var liName = $(".liName");
      // sections 内容
      var sections = document.getElementsByClassName("section")
      for (var i = sections.length - 1; i >= 0; i--) {
        if (self.scroll >= sections[i].offsetTop - 300) {
          liName
            .eq(i)
            .addClass("current")
            .siblings()
            .removeClass("current");
          break;
        }
      }
    },
    dataScroll () {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop
      // console.log(this.scroll)
    },
    jump (index) {
      let jump = document.getElementsByClassName("section")
      // 获取需要滚动的距离
      console.log(jump)
      let total = jump[index].offsetTop
      // // Chrome
      document.body.scrollTop = total
      // console.log(total)
      // // Firefox
      document.documentElement.scrollTop = total
      // // Safari
      window.pageYOffset = total
      // $('html, body').animate({
      // 'scrollTop': total
      // }, 400);
    },
    // aa (e) {
    //   var ulName = document.getElementsByClassName("ulName")
    //   ulName[0].classList.add("current")
    //   // console.log(e)
    //   // console.log('相对与屏幕==>screenX: ' + e.screenX + '+screenY: ' + e.screenY)
    //   // console.log('相对浏览器窗口==>clientX: ' + e.clientX + '+clientY: ' + e.clientY)
    //   // console.log('相对文档==>offsetX: ' + e.offsetX + '+offsetY: ' + e.offsetY)
    //   // console.log(document.documentElement.scrollTop)
    // }
  },
  mounted() {
    window.addEventListener("scroll", this.dataScroll)
  }
}
</script>
<style lang="scss" scoped>
  .container {
    .section {
      width: 100%;
      height: 500px;
      background: red;
    }
    .ulName {
      width: 100px;
      height: 105px;
      list-style: none;
      position: fixed;
      top: 40%;
      right: 50px;
      background: green;
      .liName {
        width: 90%;
        margin: 0 auto;
        margin-top: 5px;
        text-align: center;
        border: 1px solid red;
        // background: white;
        cursor: pointer;
      }
    }
  }
  .current {
    color: #fff;
    background: red;
  }
</style>
