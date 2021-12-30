<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="1"
    :page-sizes="[10, 20, 50, 100]"
    :page-size="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="totalNum">
  </el-pagination>
</template>

<script>
export default {
  props:{
    totalNum:Number,
    pageSize:Number,
  },
  name:"elPage",
  methods:{
    handleSizeChange(val){
      this.$emit('sizeChange',val)
    },
    handleCurrentChange(val){
      this.$emit('handlePage',val)
    },
  },
}
</script>

<style>

</style>