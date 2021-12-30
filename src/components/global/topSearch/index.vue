<template>
    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <template v-for="(item,index) in inputList">
        <el-form-item :label="item.labelText" :key="index" :prop="item.propName">
          <el-input v-model="item.inputText" v-if="item.type == 0" clearable></el-input>

          <el-select v-model="item.selectValue" placeholder="请选择" clearable v-else>
            <el-option :label="ite.text" :value="ite.value" v-for="(ite,idx) in item.selectList" :key="idx"></el-option>
          </el-select>
        </el-form-item>
        
      </template>
      <el-form-item>
        <el-button type="primary" @click="searchFun()">搜索</el-button>
        <el-button  @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
export default {
  props:{
    ruleForm:Object,
    inputList:Array
  },
  name:"topSearch",
  methods:{
    searchFun(){
      this.$emit('searchFun')
    },
    resetForm() {
      this.$emit('resetFun')
    }
  },
}
</script>

<style scoped>
.demo-ruleForm{
  display: flex;
  flex-wrap: wrap;
}

</style>