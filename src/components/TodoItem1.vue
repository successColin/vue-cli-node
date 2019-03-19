<template>
  <div class="item">
    <el-checkbox v-model="checked">{{val}}</el-checkbox>
    <span @click="delIng(index)" style="cursor: pointer">delete</span>
  </div>
</template>
<script>
export default {
  props: ['val']
}
</script>
<style lang="scss" scoped>
  .item {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
</style>
