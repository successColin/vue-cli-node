<template>
  <div class="container">
    <div  class="content">
      <table></table>
      <div>
        <span>正在进行</span>
        <span>{{nameLeight}}</span>
      </div>
      <div v-for="(val, index) in name" :key="index" class="bg">
        <el-checkbox v-model="val.state" @change="(value) => handleChange(value, index, name[index])">{{val.label+'_'+val.state}}</el-checkbox>
        <span @click="delIng(index)" style="cursor: pointer">delete</span>
      </div>
      <div>
        <span>已经完成</span>
        <span>{{nameLeight}}</span>
      </div>
      <div v-for="(val, index) in success" :key="'success'+index" class="bg">
        <el-checkbox v-model="val.state" disabled>{{val.label}}</el-checkbox>
        <span @click="delSuccess(index)" style="cursor: pointer">delete</span>
      </div>
      <slot/>
    </div>
  </div>
</template>
<script>
export default {
  props: ['state'],
  data () {
    return {
      checked: true
    }
  },
  computed: {
    name () {
      return this.$store.state.todo.name
    },
    nameLeight () {
      return this.$store.state.todo.name.length
    },
    success () {
      return this.$store.state.todo.success
    }
  },
  methods: {
    handleChange (val, index, row) {
      if (val) {
        this.$store.commit('Cut_Name', index)
        this.$store.commit('Add_Success', row)
      }
    },
    delIng (index) {
      this.$store.commit('Cut_Name', index)
    },
    delSuccess (index) {
      this.$store.commit('Cut_Success', index)
    }
  }
}
</script>
<style lang='scss' scoped>
  $width: 70%;
  .container {
    .content {
      width: $width;
      margin: 0 auto;
      div {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        font-size: 20px;
        font-weight: 700;
      }
      .bg {
        background: white;
        height: 30px;
        border-radius: 5px;
        align-items: center;
        padding-left: 5px;
        padding-right: 5px;
      }
    }
  }
</style>
