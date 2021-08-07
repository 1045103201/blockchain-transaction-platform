<template>
  <div>
    <el-container>
      <el-header><Header></Header></el-header>
      <el-main>
        <div class="block">
          <el-carousel height="500px" arrow="always">
            <el-carousel-item style="text-align: left">
              <Carousel></Carousel>
            </el-carousel-item>
            <el-carousel-item style="text-align: left">
              <Carousel></Carousel>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div>
          <el-row type="flex" justify="center">
            <el-col span="10">
              <span style="font-size: 30px; font-weight: bold">探索资源共享、交易有序、公开透明的模型交易平台</span>
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-around">
            <el-col span="5">
              <img src="../assets/upload.png" id="upload">
            </el-col>
            <el-col span="5">
              <img src="../assets/share.png" id="share">
            </el-col>
            <el-col span="5">
              <img src="../assets/serve.png" id="serve">
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-around">
            <el-col span="5">
              <span class="font-color">中心化</span><span class="font">上传管理</span><br>
              <span class="font">上传数据严格审查</span>
            </el-col>
            <el-col span="5">
              <span class="font">基于</span><span class="font-color">区块链</span><span class="font">技术</span><br>
              <span class="font">数据支持公开审查</span>
            </el-col>
            <el-col span="5">
              <span class="font-color">去中心</span><span class="font">化服务</span><br>
              <span class="font">数据分布共识一致</span>
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-around">
            <el-col span="5">
              <el-button round @click="upload">模型上传</el-button>
            </el-col>
            <el-col span="5">
              <el-button round>信息共享</el-button>
            </el-col>
            <el-col span="5">
              <el-button round>模型使用</el-button>
            </el-col>
          </el-row>
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
import Carousel from "@/components/Carousel"

export default {
  name: "login",
  components: {Carousel, Footer, Header},
  data() {
    return {
      items:[
          Header
      ],
      form: {
        name: ''

      }

    }
  },
  methods:{
    upload(){
      this.$router.push("/upload1")
    }
  }
}
</script>

<style scoped>

#upload {
  width: 320px;
  height: 300px;
}
#share {
  width: 320px;
  height: 300px;
}
#serve {
  width: 320px;
  height: 300px;
}

.font {
  font-size: 25px;
  font-weight: bold;
}
.font-color {
  font-size: 25px;
  font-weight: bold;
  color: #3A62D7;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background: url("../assets/bg.png") center center no-repeat;
  background-size: 100% 100%;
}

.el-carousel__item:nth-child(2n+1) {
  background: url("../assets/bg.png") center center no-repeat;
  background-size: 100% 100%;
}

.el-button {
  background: #3A62D7;
  border: #3A62D7;
  width: 100%;
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