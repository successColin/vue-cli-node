<template>
  <div class="router2">
    <bubbles :options="options"></bubbles>
    
    <el-row style="margin-top: 13rem;">
      <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="8"></el-col>
      <el-col :xs="16" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="secret">保密客栈</div>
        <div class="login">
          <table></table>
          <ul>
            <li>密码登录</li>
            <li>只属于自己的秘密</li>
            <li>
              <el-input v-model="uname" prefix-icon="el-icon-view" placeholder="请输入用户名"></el-input>
            </li>
            <li>
              <el-input v-model="upwd" prefix-icon="el-icon-view" placeholder="请输入密码"></el-input>
            </li>
            <li>
              <el-row :gutter="10">
                <el-col :xs="12" :sm="14" :md="12" :lg="16" :xl="18">
                  <el-input
                    size="medium"
                    placeholder="请输入验证码"
                    prefix-icon="el-icon-view"
                    v-model="code">
                  </el-input>
                </el-col>
                <el-col :xs="12" :sm="8" :md="12" :lg="8" :xl="4">
                  <one-code ref="code" :width='width' :height='height'></one-code>
                </el-col>
              </el-row>
            </li>
            <li>
              <el-button type="primary" style="width:100%" @click="loginIn">登录</el-button>
            </li>
            <li>
              <span>免费注册</span>
              <span>忘记密码</span>
            </li>
            <li style="clear:both"></li>
          </ul>
          <table></table>
        </div>
      </el-col>
    </el-row>

  </div>
</template>
<script>
import Bubbles from '@/components/Bubbles'
import OneCode from '@/components/Code/code1'
import { loginByUsername } from '@/api/login'

export default {
  data () {
    return {
      uname: 'admin',
      upwd: '123456',
      code: '',

      width: 120,
      height: 40
    }
  },
  components: {
    Bubbles,
    OneCode
  },
  computed: {
    options() {
      return {
        clearOffset: 0.4
      }
    }
  },
  methods: {
    token () {},
    loginIn () {
      loginByUsername(this.uname, this.upwd).then(res => {
        if (res.data === 1) {
          sessionStorage.setItem('token', res.data)
          this.$router.push({path: '/'})
        }
      })
    }
  }
}
</script>
<style lang="scss">
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
  // .el-row {
  //   margin-top: 13rem;
  // }
</style>

