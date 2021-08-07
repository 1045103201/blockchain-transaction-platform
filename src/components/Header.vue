<template>
  <div>

    <el-row :gutter="20" >
      <el-col :span="1">

        <img src="../assets/lg.png" id="lg" >

      </el-col>
      <el-col :span="4">
        <span id="title">区块链模型交易平台</span>
      </el-col>
      <el-col :span="4" offset="10">
        <el-input v-model="input" placeholder="请输入内容" suffix-icon="el-icon-search" ></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" round @click="register">创建账号</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" round @click="login">用户登录</el-button>
      </el-col>
      <el-col :span="1">
        <img src="../assets/user.png" id="user">
      </el-col>

    </el-row>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      input: ''
    }
  },
  methods: {
    register(){
      this.$router.push("/register")
    },
    login(){
      this.$router.push("/login")
    },

  }
}
</script>

<style scoped>
.s2{    /*s2是我的输入框class*/
}
/deep/ .el-input__inner { /*或者 .s2>>>.el-input__inner  */

  border-radius: 20px; /*输入框圆角值*/
  background-color: #ffffff;
  /*background: transparent;*/
}
.el-button {
  background: #3A62D7;
  border: #3A62D7;
}
#user {
  width: 38px;
  height: 40px;
  margin-top: 10px;
}
#lg {
  width: 70px;
  height: 40px;
  margin-top: 10px;

}
#title {
  font-size: 30px;
  font-weight: bold;

}
.el-row {

  margin-bottom: 20px;
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
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>