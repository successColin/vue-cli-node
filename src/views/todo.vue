<template>
  <div class="container">
    <div class="h">
      <div class="header">
        <div class="text">
          ToDoList
        </div>
        <el-input
          placeholder="添加ToDo"
          v-model="input"
          clearable
          style="width: 300px;"
          @keyup.enter.native="onEnter">
        </el-input>
        <el-button @click="handleJson">node 增删改查</el-button>
      </div>
    </div>
    <todo-item>
      <el-button style="margin-top:30px;" @click="handleJump">楼层跳转</el-button>
      <el-button @mouseenter.native="enterName" @mouseleave.native="leaveName" style="width: 98px;">{{ message }}</el-button>
      <div @mouseenter="enterIn" @mouseleave="leaveOut" style="position: relative; width: 150px; height: 50px;">
        <div>
          鼠标移入有东西
        </div>
        <div v-show="seen" style="position: absolute; top: 30px; width: 200px; height: 50px; background: green; border-radius:10px; ">
          <router-link to="persons" style="width: 200px; text-align: center;line-height: 50px;">开奖</router-link>
        </div>
      </div>
      <el-button @click="handleBoot" style="margin-top: 100px;">响应式布局</el-button>
      <el-button @click="handleLogin" style="margin-top: 100px;">登录</el-button>
      <el-button @click="handleCode" style="margin-top: 100px;">验证码</el-button>
      <el-button @click="handleTable" style="margin-top: 100px;">表格合并</el-button>
      <el-button @click="handleMoment" style="margin-top: 100px;">时间 moment 组件库</el-button>
      <el-button>
        <i class="el-icon-edit"></i>
        <svg-icon iconClass="eye"/>
      </el-button>
      <!-- <lang-select></lang-select> -->
      <!-- <div>
        <span>{{$t('name')}}</span>
      </div> -->

    </todo-item>
  </div>
</template>
<script>
import TodoItem from '@/components/TodoItem'
// import LangSelect from '@/components/LangSelect'

export default {
  components:{TodoItem},
  data () {
    return {
      input: '',
      message: '开奖名字',
      seen: false
    }
  },
  methods: {
    handleBoot () {
      this.$router.push({path: 'boot'})
    },
    enterIn () {
      this.seen = true
    },
    leaveOut () {
      this.seen = false
    },
    enterName () {
      this.message = 'colin'
    },
    leaveName () {
      this.message = '开奖名字'
    },
    handleLogin () {
      this.$router.push({path: 'login'})
    },
    handleJump () {
      this.$router.push({path: 'floor'})
    },
    handleJson () {
      this.$router.push({path: 'persons'})
    },
    handleCode () {
      this.$router.push({path: 'code'})
    },
    onEnter () {
      if (this.input === '') {
        this.$message.error('input 不能为空');
      } else {
        this.$store.commit('Add_Name', {label: this.input, state: false})
        this.input = ''
      }
    },
    handleTable () {
      this.$router.push({path: 'table'})
    },
    handleMoment () {
      // 一、安装：npm install moment --save
      // 二、在main.js中导入：
      // import moment from 'moment'
      // Vue.prototype.$moment = moment
      // 三、使用：let nowTime = this.$moment().format('Y-MM-DD')
      var day = this.$moment().format('YYYY-MM-DD HH:mm:ss')
      console.log(day)
    }
  },
  computed: {
    name () {
      return this.$store.state.todo.name
    },
    options() {
      return {
        clearOffset: 0.4
      }
    }
  }
}
</script>
<style lang='scss' scoped>
  .router2 {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    z-index: -1;
  }
  $height: 70px;
  div {
    padding: 0;
    margin: 0;
  }
  .container {
    width: 100%;
    height: calc(100vh - 70px);
    .h {
      background: #061820;
      .header {
        width: 70%;
        height: $height;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        div.text, el-input {
          display: inline-block;
        }
        div.text {
          font-size: 30px;
          color: #c4cdd6;
        }
        .el-input__inner {
          height: 27px !important;
        }
      }
    }
    .item {
      margin-top: 20px;
    }
  }
</style>
