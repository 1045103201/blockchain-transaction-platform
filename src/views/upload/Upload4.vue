<template>
  <div>
    <el-container>
      <el-header><Header></Header></el-header>
      <el-main>
        <div>
          <el-steps :active="3" align-center>
            <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
          </el-steps>
        </div>

      </el-main>
      <el-footer height="120px"><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<script>

// @ is an alias to /src
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default {
  name: "login",
  components: { Footer, Header},
  data() {
    return {
      items:[
        Header
      ],
      form: {
        name: ''

      }

    }
  }
}
</script>

<style scoped>

/deep/ .el-step__head.is-finish {
  color: #3A62D7;
  border-color: #3A62D7;
}
/deep/ .el-step__title.is-finish {
  color: #3A62D7;
}
/deep/ .el-step__description.is-finish {
  color: #3A62D7;
}




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
  margin-top: 150px;
  margin-bottom: 20px;
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
  background-color: #F5F5F5;
  background-size: 100% 100%;
  /*background-color: #E9EEF3;*/
  color: #333;
  text-align: center;
  height: 1200px;
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