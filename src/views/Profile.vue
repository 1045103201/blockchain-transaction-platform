<template>
  <div>
    <el-container>
      <el-header><Header></Header></el-header>
      <el-main>
        <div id="title">个人信息</div>
        <el-form ref="form" :model="form" >
          <el-row type="flex" justify="center">
            <el-col span="4">
              <el-form-item>
                <el-input v-model="form.name" prefix-icon="el-icon-user" placeholder="昵称"></el-input>
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
                <el-input v-model="form.name" prefix-icon="el-icon-lock" show-password placeholder="确认密码"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center">
            <el-col span="4">
              <el-form-item>
                <el-input v-model="form.name" prefix-icon="el-icon-phone-outline" placeholder="电话"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center">
            <el-col span="4">
              <el-form-item>
                <el-input v-model="form.name" prefix-icon="el-icon-message" placeholder="邮箱"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center">
            <el-col span="4">
              <el-form-item>
                <el-input v-model="form.name" prefix-icon="el-icon-office-building" placeholder="所属机构"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center">
            <el-col span="4">
              <el-form-item>
                <el-button round>确认修改</el-button>
              </el-form-item>
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
      s: true,
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
  color: #F5F5F5;
}
.el-row {
  margin-top: 30px;
  margin-bottom: 20px;
}

#title {
  color: #F5F5F5;
  font-size: 30px;
  font-weight: bold;
  border: #333333;
  margin-top: 50px;
  margin-bottom: 20px;
}


#bg {

  background: url("../assets/bg.png") center center no-repeat;
  background-size: contain;
  position: absolute
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