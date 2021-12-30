<template>
  <div class="home">
    <h2>element表格封装</h2>
    <elementTable
      :tableData="tableData"
      :tableLine="tableLine"
      :haveAction="haveAction"
      :btnList="btnList"
      @seeInfor="seeInfor"
      @editFun="editFun"
      @deleteFun="deleteFun"
    ></elementTable>

    <h2>顶部搜索封装</h2>
    <topSearch :ruleForm="ruleForm" :inputList="inputList" @searchFun="searchFun" @resetFun="resetFun"></topSearch>

    <h2>分页封装</h2>
    <elPage :totalNum="totalNum" :pageSize="pageSize" @sizeChange="sizeChange" @handlePage="handlePage"></elPage>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      // 表格数据
      tableData: [
        {
          name: "小白",
          phone: "158706666",
          cardId: "3607301999",
          sexy: 1,
          address: "123",
        },
        {
          name: "小黑",
          phone: "158706666",
          cardId: "3607301999",
          sexy: 0,
          address: "123",
        },
      ],
      tableLine: [
        {
          label: "姓名",
          keyName: "name",
        },
        {
          label: "手机号",
          keyName: "phone",
        },
        {
          label: "身份证号码",
          keyName: "cardId",
        },
        {
          label: "性别",
          keyName: "sexy",
        },
        {
          label: "出身地",
          keyName: "address",
        },
      ],
      haveAction: true, // 是否展示操作
      btnList: [
        {
          btnType: "primary",
          btnText: "查看",
          clickType: 0,
        },
        {
          btnType: "success",
          btnText: "编辑",
          clickType: 1,
        },
        {
          btnType: "danger",
          btnText: "删除",
          clickType: 2,
        },
      ],
      // ------------------------------------------------------------------------------------------------------表格end
      // 顶部搜索------------------
      ruleForm:{
        name:'',
        phone:'',
        sexy:'',
      },
      inputList:[
        {
          labelText:'姓名',
          inputText:'',
          type:0,
          propName:'name'
        },
        {
          labelText:'手机号',
          inputText:'',
          type:0,
          propName:'phone'
        },
        {
          labelText:'性别',
          selectValue:'',
          type:1,
          propName:'sexy',
          selectList:[
            {
              text:'男',
              value:1
            },
            {
              text:'女',
              value:0
            },
          ],
        },
      ],
      // 顶部搜索end----------------
      // 分页封装
      totalNum:100,
      pageSize:10,
      // end -------
    };
  },
  mounted() {
    this.tableData.forEach((item) => {
      this.$set(item, "sexy", item.sexy == 1 ? "男" : "女");
    });
  },
  methods: {
    seeInfor(row) {
      console.log("查看", row);
    },
    editFun(row) {
      console.log("编辑", row);
    },
    deleteFun(row) {
      console.log("删除", row);
    },

    // 顶部搜索
    searchFun(){
      var dataObj = {
        name:this.inputList[0].inputText,
        phnoe:this.inputList[1].inputText,
        sexy:this.inputList[2].selectValue,
      }
      console.log(dataObj)
    },
    // 重置
    resetFun(){
      this.inputList.forEach(item=>{
        item.inputText = item.selectValue = ''
      })
    },

    // 切换一页数量
    sizeChange(v){
      console.log('切换到数量',v)
    },
    handlePage(v){
      console.log('当前是第几页',v)
    },
  },
};
</script>
