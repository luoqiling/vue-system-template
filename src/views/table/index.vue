<template>
  <div class="table-container">
    <h1>Table</h1>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template v-slot="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template v-slot="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template v-slot="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template v-slot="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template v-slot="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template v-slot="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="list && list.length > 0"
      layout="total, prev, pager, next"
      background
      :total="pageTotal"
      :page-size="pageSize"
      :current-page="currentPage"
      @current-change="handleCurrentPageChange"
    />
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  name: 'Table',
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      pageTotal: 100,
      pageSize: 20,
      currentPage: 1
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    handleCurrentPageChange(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.table-container{
  padding: 20px;
  overflow: hidden;
  box-sizing: border-box;
  h1 {
    margin-bottom: 20px;
  }
  .el-pagination {
    float: right;
    margin-top: 20px;
  }
}
</style>
