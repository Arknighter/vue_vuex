<template>
  <!-- <h2>App</h2>
   访问全局注册的store中的counter 
  <h2>App当前计数：{{ $store.state.counter }}</h2> -->
  <HomePage/>
  <br/>
  <el-card>
  <el-table :data="TableDates" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="phoneNumer" label="phoneNumer" width="180" />
    <el-table-column prop="address" label="Address"  />
  </el-table>
        <!-- page-size / v-model:page-size	每页显示条目个数 -->
        <!-- total	总条目数 -->
        <!-- page-count总页数 -->
        <!-- current-page当前页数 -->
      <el-pagination 
                    layout="prev, pager, next" 
                    :total="tableData.length" 
                    :page-size="pages.pageSize"
                    :current-page="pages.NowPage"
                    @current-change="currentPageChange"
            
                    /> 
  </el-card>
  
</template>

<script setup>
  import { reactive} from 'vue';
  import HomePage from './components/HomePage.vue'

   //定义数据总数目
   const pages = reactive({
    //第几页
    NowPage:1,
    //每页的数据
    pageSize:3
  })
  //本地数据
  const tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      phoneNumer:'111111111',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      phoneNumer:'111111111111',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      phoneNumer:'1111111111',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      phoneNumer:'22222222222',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-03',
      name: 'Tom',
      phoneNumer:'2222222222',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      phoneNumer:'22222222222',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      phoneNumer:'33333',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      phoneNumer:'33333',
      address: 'No. 189, Grove St, Los Angeles',
    }
  ]
  //将数组分页函数  
  //array原数组  pageSize每页显示的数量    pageNumber显示第几页
  function paginateArray(array, pageSize, pageNumber) {
      const startIndex = (pageNumber - 1) * pageSize;
      const endIndex = startIndex + pageSize;   
      return array.slice(startIndex, endIndex);
    }
  //将某一页的数据复制到渲染data里去
  let TableDates = paginateArray(tableData,pages.pageSize,pages.NowPage)
  //定义复制函数
  function TableDatesFun(num){
    TableDates = paginateArray(tableData,pages.pageSize,num)
  }
  //执行切换页码监听
  function currentPageChange(val){
    //设置新的页码
    pages.NowPage=val
    //展示新的数据
    TableDatesFun(pages.NowPage)
  }

  
  


  
</script>

<style scoped>

</style>
 