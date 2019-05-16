<template>
  <div>
    <one-code ref="code" :width='width' :height='height'></one-code>
    <el-button @click="handleDrow">重置</el-button>
    <!-- <two-code></two-code> -->
  </div>
</template>
<script>
import OneCode from '@/components/Code/code1'
// import TwoCode from '@/components/Code/code2'

export default {
  data () {
    return {
      width: 120,
      height: 40
    }
  },
  components: {OneCode},
  methods: {
    handleDrow () {
      this.$refs.code.drow()
    }
  }
}
</script>

<style>

</style>
