<template>
  <div>
    <el-row :gutter="0">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <div class="nav">
      <div class="accordion" v-on:mouseover="changeAction($event)" v-on:mouseout="removeActive($event)">
        <div>手风琴丁丁</div>
        <ul>
          <li>
            <a href="">表格一</a>
          </li>
          <li>
            <a href="">表格二</a>
          </li>
          <li>
            <a href="">表格三</a>
          </li>
          <li>
            <a href="">表格四</a>
          </li>
        </ul>
      </div>
      <div class="accordion" v-on:mouseover="changeAction($event)" v-on:mouseout="removeActive($event)">
        <div>手风琴丫丫</div>
        <ul>
          <li>
            <a href="">表格一</a>
          </li>
          <li>
            <a href="">表格二</a>
          </li>
          <li>
            <a href="">表格三</a>
          </li>
          <li>
            <a href="">表格四</a>
          </li>
        </ul>
      </div>
    </div>
    <el-table
      :data="tableData"
      :span-method="arraySpanMethod"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="amount1"
        sortable
        label="数值 1">
      </el-table-column>
      <el-table-column
        prop="amount2"
        sortable
        label="数值 2">
      </el-table-column>
      <el-table-column
        prop="amount3"
        sortable
        label="数值 3">
      </el-table-column>
    </el-table>
    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="amount1"
        label="数值 1（元）">
      </el-table-column>
      <el-table-column
        prop="amount2"
        label="数值 2（元）">
      </el-table-column>
      <el-table-column
        prop="amount3"
        label="数值 3（元）">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        id: '12987122',
        name: '王小虎',
        amount1: '234',
        amount2: '3.2',
        amount3: 10
      }, {
        id: '12987123',
        name: '王小虎',
        amount1: '165',
        amount2: '4.43',
        amount3: 12
      }, {
        id: '12987124',
        name: '王小虎',
        amount1: '324',
        amount2: '1.9',
        amount3: 9
      }, {
        id: '12987125',
        name: '王小虎',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      }, {
        id: '12987126',
        name: '王小虎',
        amount1: '539',
        amount2: '4.1',
        amount3: 15
      }]
    }
  },
  methods: {
    changeAction ($event) {
      // console.log($event)
      $event.currentTarget.lastChild.className = 'tableNav'
    },
    removeActive($event){
      // console.log($event)
      $event.currentTarget.lastChild.className = ''
    },
    arraySpanMethod({ rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 3]
        } else if (columnIndex === 1 || columnIndex === 2) {
          return [0, 0]
        }
      }
    },
    objectSpanMethod({ rowIndex, columnIndex }) {
      if (rowIndex === 1) {
        // 合并第二行
        if (columnIndex === 1) {
          // 从第二行开始
          return [2,3]  // 返回行和列的合并数量
        } else if (columnIndex === 2 || columnIndex === 3) {  // 判断省略数据
          return [0,0]
        }
      } else if (rowIndex === 2 && (columnIndex === 1 || columnIndex === 2 || columnIndex === 3)) {
        return [0,0]
      }
    }
  }
}
</script>
<style lang='scss' scoped>
  $heightNav : 30px;
  .nav {
    width: 400px;
    height: $heightNav;
    .accordion {
      width: 200px;
      display: inline-block;
      position: relative;
      div {
        width: 200px;
        height: $heightNav;
        position: absolute;
        top: 0;
        left: 0;
        font-size: 25px;
        font-weight: 700;
      }
      ul {
        list-style: none;
        width: 100px;
        height: 0px;
        position: absolute;
        top: 30px;
        left: 0px;
        overflow: hidden;
        transition: all 2s;
        // display: none;
      }
    }
  }
  .tableNav {
    height: 100px !important;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
