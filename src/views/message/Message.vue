<template>
  <div>
    <el-container>
      <el-header><Header></Header></el-header>
      <el-main>
        <el-container>
          <el-aside width="800px">
            <div class="block">
              <el-timeline>
                <el-timeline-item timestamp="2018/4/12" placement="top">
                  <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/12 20:46</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/3" placement="top">
                  <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/3 20:46</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/2" placement="top">
                  <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/2 20:46</p>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </div>
          </el-aside>
          <el-main>
            <el-row type="flex" justify="space-around">
              <el-col span="8">
                <el-card shadow="always">
                  总是显示
                </el-card>
              </el-col>
              <el-col span="8">
                <el-card shadow="always">
                  总是显示
                </el-card>
              </el-col>
            </el-row>
            <el-row type="flex" justify="space-around">
              <el-col span="8">
                <el-card shadow="always">
                  总是显示
                </el-card>
              </el-col>
              <el-col span="8">
                <el-card shadow="always">
                  总是显示
                </el-card>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col span="20">
                <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                  <el-table-column
                      align="center"
                      prop="date"
                      label="日期"
                      width="180">
                  </el-table-column>
                  <el-table-column
                      align="center"
                      prop="name"
                      label="姓名"
                      width="180">
                  </el-table-column>
                  <el-table-column
                      align="center"
                      prop="address"
                      label="地址">
                  </el-table-column>
                  <el-table-column
                      align="center"
                      prop="status"
                      label="节点状态">
                  </el-table-column>
                </el-table>
              </el-col>
            </el-row>
          </el-main>
        </el-container>



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
      },
      tableData: [{
        date: '142452gh34v214h12423',
        name: '1214',
        address: '124235',
        status: '正常'
      }, {
        date: '142452gh34v214h12423',
        name: '1214',
        address: '124235',
        status: '正常'
      }, {
        date: '142452gh34v214h12423',
        name: '1214',
        address: '124235',
        status: '正常'
      }, {
        date: '142452gh34v214h12423',
        name: '1214',
        address: '124235',
        status: '正常'
      }]

    }
  }
}
</script>

<style scoped>







.el-row {
  margin-top: 30px;
  margin-bottom: 20px;
  line-height: 60px;
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

  color: #333;
  text-align: center;
  line-height: 50px;
}

.el-main {
  background-color: #F5F5F5;
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