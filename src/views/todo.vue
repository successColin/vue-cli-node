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
    </todo-item>
  </div>
</template>
<script>
import TodoItem from '@/components/TodoItem'

export default {
  components: {TodoItem},
  data () {
    return {
      input: '',
      message: '开奖名字',
      seen: false
    }
  },
  methods: {
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
    handleJump () {
      this.$router.push({path: 'floor'})
    },
    handleJson () {
      this.$router.push({path: 'persons'})
      // axios.get('http://localhost:3000').then(res => {
      //   console.log(res.data)
      // })
      // axios.get('http://localhost:3000/users').then(res => {
      //   console.log(res.data)
      // })
      // axios.get('http://localhost:3000/users/first').then(res => {
      //   console.log(res.data)
      // })
      // axios.post('http://localhost:3000/users/cc').then(res => {
      //   console.log(res.data)
      // })
    },
    onEnter () {
      if (this.input === '') {
        this.$message.error('input 不能为空');
      } else {
        this.$store.commit('Add_Name', {label: this.input, state: false})
        this.input = ''
      }
    }
  },
  computed: {
    name () {
      return this.$store.state.todo.name
    }
  }
}
</script>
<style lang='scss' scoped>
  $height: 70px;
  div {
    padding: 0;
    margin: 0;
  }
  .container {
    width: 100%;
    height: calc(100vh - 70px);
    background: #babec0;
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
