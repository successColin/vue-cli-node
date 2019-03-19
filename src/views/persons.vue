<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>node操作数据库 —— 用户信息</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="handleIndex">
          <i class="el-icon-back">&nbsp;返回主页</i>
        </el-button>
      </div>
      <el-table :data="tableData.slice((currentPage-1) * pageSize,currentPage*pageSize)" border style="width: 100%">
        <el-table-column v-for="(item, index) in col"
          :key='index'
          :prop='item.prop'
          :min-width='item.width'
          :label='item.label'>
        </el-table-column>
        <el-table-column
          label="操作"
          width="200">
          <template slot-scope="scope">
            <el-button @click="handleAdd(scope.row)" type="text" size="small">添加</el-button>
            <el-button @click="handleUpdate(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="handleDel(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </el-card>

    <el-dialog :title="title[name]" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="dataForm" :rules="rules">
        <el-form-item label="用户名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
          <el-input v-model.number="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="职业" :label-width="formLabelWidth" prop="professional">
          <el-input v-model="form.professional" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="name === 'create' ? handleCreate() : handleUpdaeOk()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000)
    }
    return {
      currentPage: 1,
      pageSize: 5,
      total: 0,
      name: '',
      title: {
        update: '修改用户',
        create: '添加用户'
      },
      form: {
        name: '',
        age: '',
        professional: '',
        id: ''
      },
      formLabelWidth: '120px',
      dialogFormVisible: false,
      col: [
        {label: 'ID', prop: 'ID', width: '100'},
        {label: '姓名', prop: 'name', width: '100'},
        {label: '年龄', prop: 'age', width: '100'},
        {label: '职业', prop: 'professional', width: '100'},
      ],
      tableData: [],
      rules: {
        name: [
          { required: true, message: '请填写姓名', trigger: 'blur' }
        ],
        age: [
          { required: true, validator: checkAge, trigger: 'blur' }
        ],
        professional: [
          { required: true, message: '请填写职业', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageSize = val
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
    },
    resetTemp() {
      this.form = {
        name: '',
        age: '',
        professional: '',
        id: ''
      }
    },
    getList () {
      Axios.get('http://localhost:3000/persons').then( res => {
        let data = res.data
        for (var i=0;i<data.length;i++) {
          data[i]['ID'] = i+1
        }
        this.tableData = data
        this.total = data.length
        console.log(this.total, this.tableData)
      })
    },
    handleAdd () {
      this.resetTemp()
      this.dialogFormVisible = true
      this.name = 'create'
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleCreate () {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          Axios.post('http://localhost:3000/persons/add',{
            name: this.form.name,
            age: this.form.age,
            professional: this.form.professional
          }).then( res => {
            if (res.data.affectedRows === 1) {
              this.$message({
                showClose: true,
                message: '恭喜你，添加成功',
                type: 'success'
              })
              this.getList()
            }
          })
          this.dialogFormVisible = false
        }
      })
    },
    handleUpdaeOk () {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          Axios.post('http://localhost:3000/persons/update',{
            id: this.form.id,
            name: this.form.name,
            age: this.form.age,
            professional: this.form.professional
          }).then( res => {
            console.log(res.data)
            if (res.data.affectedRows === 1) {
              this.$message({
                showClose: true,
                message: '恭喜你，添加成功',
                type: 'success'
              })
              this.getList()
            }
          })
          this.dialogFormVisible = false
        }
      })
    },
    handleUpdate (row) {
      console.log(row)
      this.dialogFormVisible = true
      this.form = Object.assign({}, row)
      this.name = 'update'
      this.form.id = row.id
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleDel (row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        Axios.get('http://localhost:3000/persons/del?id=' + row.id).then( res => {
          console.log(res)
          if (res.data.affectedRows === 1) {
            this.$message({
              showClose: true,
              message: '恭喜你，删除成功',
              type: 'success'
            })
            this.getList()
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleIndex () {
      this.$router.push({path: '/'})
    }
  }
}
</script>
<style scoped>
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-card {
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
}
</style>
