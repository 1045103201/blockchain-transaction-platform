<template>
<div>
    <el-row type="flex" justify="space-between">
      <el-col span="4">
        <p style="text-align: left">联系我们</p>
      </el-col>
      <el-col span="4">
        <img src="../assets/lg.png" id="lg"><br>
      </el-col>
      <el-col span="4"></el-col>
    </el-row>
  <el-row type="flex" justify="space-between">
    <el-col span="4">
      <p style="text-align: left">Email:12524534635@blockchain.com</p>
    </el-col>
    <el-col span="4">
      <p style="font-size: 20px; font-weight: bold">区块链模型交易平台</p>
    </el-col>
    <el-col span="4"></el-col>
  </el-row>
  <el-row type="flex" justify="space-between">
    <el-col span="4">
      <p style="text-align: left">Tel:125245</p>
    </el-col>
    <el-col span="4">
    </el-col>
    <el-col span="4"></el-col>
  </el-row>

</div>
</template>

<script>
export default {
  name: "Footer"
}
</script>


<style scoped>
#lg {
  width: 50px;
  height: 30px;
  margin-top: 10px;
}
#font {
  font-weight: bold;
  font-size: 20px;
}
</style>