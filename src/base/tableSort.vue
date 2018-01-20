<template>
  <div>
    <h1>23123</h1>
    <v-sort :columns="columns" :data="data"></v-sort>
    <button @click="add()">添加数据</button>
  </div>
</template>

<script>
  import vSort from '../base/sort.js'

  export default {
    components: {
      vSort
    },
    data() {
      return {
        columns: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age',
            sortable: true
          },
          {
            title: '出生日期',
            key: 'birthday',
            sortable: true
          },
          {
            title: '地址',
            key: 'address'
          }
        ],
        data: [
          {
            name: '李晓华1',
            age: 25,
            birthday: '1999-11-10',
            address: '上海1'
          },
          {
            name: '李晓华2',
            age: 22,
            birthday: '1998-11-10',
            address: '上海2'
          },
          {
            name: '李晓华3',
            age: 23,
            birthday: '1995-11-10',
            address: '上海3'
          },
          {
            name: '李晓华4',
            age: 15,
            birthday: '1990-11-10',
            address: '上海4'
          },
          {
            name: '李晓华5',
            age: 29,
            birthday: '1988-11-10',
            address: '上海5'
          },
        ]
      }
    },
    methods:{
      add(){
        this.data.push({
          name: '李晓华5',
          age: 29,
          birthday: '1988-11-10',
          address: '上海5'
        })
      }
    }
  }
</script>

<style scoped>
  table {
    width: 100%;
    margin-bottom: 24px;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #e9e9e9;
  }

  table th {
    background-color: #f7f7f7;
    color: #5c6b77;
    font-weight: 600;
    white-space: nowrap;
  }

  table td, table th {
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
    text-align: left;
  }

  table th a {
    display: inline-block;
    margin: 0 4px;
    cursor: pointer;
  }

  table th a.on {
    color: #3399ff;
  }

  table th a:hover {
    color: #3399ff;
  }
</style>
