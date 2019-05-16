<template>
  <el-table
    :data="tableData6"
    :span-method="arraySpanMethod"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="region"
      label="深圳">
    </el-table-column>
    <el-table-column
      prop="type"
      label="类型">
    </el-table-column>
    <el-table-column
      prop="company"
      label="企业名称">
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  data () {
    return {
      tableData6 : [{
        id: 1,
        region: '深圳',
        type: '外贸',
        company: [
          {name: '深圳外贸公司1'},
          {name: '深圳外贸公司2'},
          {name: '深圳外贸公司3'},
          {name: '深圳外贸公司4'}
        ]
      },{
        id: 2,
        region: '北京',
        type: '金融',
        company: [
          {name: '北京外贸公司1'},
          {name: '北京外贸公司2'},
          {name: '北京外贸公司3'},
          {name: '北京外贸公司4'}
        ]
      },{
        id: 3,
        region: '上海',
        type: '外贸',
        company: [
          {name: '上海外贸公司1'},
          {name: '上海外贸公司2'},
          {name: '上海外贸公司3'},
          {name: '上海外贸公司4'}
        ]
      }],
      arr: []
    }
  },
  methods: {
    // 数据处理  把数据最终展示的数据
    getIndex () {
      let arr = []  // 保存表格合并需要的数据
      let s = 0
      let table = this.tableData6
      let getTable = []
      table.forEach((item, i, data) => {
        if (arr.length) {
          s = arr[arr.length - 1].row + data[i - 1].company.length
        }
        // 第一次从第0行开始合并，第二次合并的开始位置是第一次的位置加上合并行数
        arr.push({
          row: s,    // 保存表格合并的起始行(从哪一行开始合并)
          index: item.company.length  // 每次需要合并几行
        })
        // 把原始数据里的子数据提取出来，生成新的表格数据
        if (item.company && item.company.length) {
          item.company.forEach(subItem => {
            getTable.push({
              id: item.id,
              region: item.region,
              type: item.type,
              company: subItem.name
            })
          })
        }
      })
      this.arr = arr
      console.log(this.arr)
      this.tableData6 = getTable
    },
    arraySpanMethod ({rowIndex,columnIndex}) {
      if (columnIndex === 0 || columnIndex === 1 || columnIndex === 2) {
        let obj = [0, 0]
        this.arr.some(v => {
          if (rowIndex === v.row) {
            obj = [v.index, 1]
          }
        })
        return obj
      }
    }
  }
}
</script>
<style>

</style>
