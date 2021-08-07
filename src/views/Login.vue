<template>
  <div>
    <el-container>
      <el-header><Header></Header></el-header>
      <el-main>
        <div id="title">用户登录</div>
        <el-form ref="form" :model="form" >
        <el-row type="flex" justify="center">
          <el-col span="4">
            <el-form-item>
            <el-input v-model="form.name" prefix-icon="el-icon-user" placeholder="用户名" ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col span="4">
            <el-form-item>
              <el-input v-model="form.name" prefix-icon="el-icon-lock" show-password placeholder="密码"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col span="4">
            <el-form-item>
              <el-button round>立即登录</el-button>
            </el-form-item>
            <table>
              <tr>
                <td width="150px" style="text-align: left">
                  <el-switch
                      v-model="value"
                      active-color="#3A62D7"
                      inactive-color="#F5F5F5">
                  </el-switch>
                  <span style=" color: #F5F5F5">记住密码</span>
                </td>
                <td width="150px" style="text-align: right">
                  <span style="color: #F5F5F5">忘记密码</span>
                </td>
              </tr>
              <tr>
                <td width="150px" style="text-align: left">
                  <span style=" color: #F5F5F5">创建账号</span>
                </td>
                <td width="150px" style="text-align: right">
                  <span style="color: #F5F5F5">其他帮助</span>
                </td>
              </tr>
            </table>
          </el-col>
        </el-row>
        </el-form>
      </el-main>
      <el-footer height="120px"><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<script>


import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "login",
  components: {Footer, Header},
  data() {
    return {
      value: true,
      form: {
        name: ''

      }

    }
  }
}
</script>

<style scoped>
.el-button {
  background: #3A62D7;
  border: #3A62D7;
  width: 100%;
  color: #F5F5F5;
}
.el-row {
  margin-top: 60px;
  margin-bottom: 20px;
}

#title {
  color: #F5F5F5;
  font-size: 30px;
  font-weight: bold;
  border: #333333;
  margin-top: 150px;
  margin-bottom: 20px;
}




.s2{    /*s2是我的输入框class*/
}
/deep/ .el-input__inner { /*或者 .s2>>>.el-input__inner  */
  border-radius: 20px; /*输入框圆角值*/
  background-color: rgba(255, 255, 255, 0.35);
  border: rgba(255, 255, 255, 0.35);
  color: #F5F5F5;

}
/deep/ .el-input__prefix {
 color: #F5F5F5;
}



.el-header{
  background-color: #F5F5F5;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  background-color: #F5F5F5;
  color: #333;
  text-align: center;
  line-height: 3px;

}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 150px;
}

.el-main {
  background: url("../assets/bg.png") center center no-repeat;
  background-size: 100% 100%;
  /*background-color: #E9EEF3;*/
  color: #333;
  text-align: center;
  height: 800px;
  padding: unset;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>