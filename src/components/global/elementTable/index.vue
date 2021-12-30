<template>
  <el-table
    :data="tableData"
    >
    <el-table-column
      :prop="item.keyName"
      :label="item.label"
      width="180" v-for="(item,index) in tableLine" :key="index">
    </el-table-column>
    <el-table-column
      v-if="haveAction"
      label="操作"
    >
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row,ite.clickType)" :type="ite.btnType" size="small" plain v-for="(ite,idx) in btnList" :key="idx">{{ite.btnText}}</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props:{
    tableData:Array,
    tableLine:Array,
    haveAction:{
      type:Boolean,
      default:false
    },
    btnList:Array
  },
  name:"elementTable",
  methods:{
    /**
     * type : 0(查看) 1(编辑) 2(删除)
     */
    handleClick(row,type){
      if(type == 0){
        this.$emit('seeInfor',row)
      }
      if(type == 1){
        this.$emit('editFun',row)
      }
      if(type == 2){
        this.$emit('deleteFun',row)
      }
      
    }
  },
}
</script>

<style>

</style>