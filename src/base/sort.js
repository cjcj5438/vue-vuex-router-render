export default {
  props: {
    columns: {//列
      type: Array,
      default() {
        return [];
      }
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentColumns: [],
      currentData: []
    }
  },
  methods: {
    makeColumns() {
      this.currentColumns = this.columns.map((col, index) => {
        col._sortType = 'normal';
        col._index = index;
        return col
      })
    },
    makeData() {
      this.currentData = this.data.map((row, index) => {
        row._index = index;
        return row;
      })
    },
    handleSortByAsc(index) {
      const key = this.currentColumns[index].key;
      this.currentColumns.forEach((col) => {
        col._sortType = 'normal';
      })
      this.currentColumns[index]._sortType = 'asc'
      this.currentData.sort((a, b) => {
        return a[key] > b[key] ? 1 : -1;
      })
    },
    handleSortByDesc(index) {
      const key = this.currentColumns[index].key;
      this.currentColumns.forEach((col) => {
        col._sortType = 'normal';
      })
      this.currentColumns[index]._sortType = 'desc'
      this.currentData.sort((a, b) => {
        return a[key] < b[key] ? 1 : -1;
      })
    }
  },
  mounted: function () {//这是什么生命周期
    this.makeColumns();
    this.makeData();
  },
  render(h) {//h 就是之前createElement
    const ths = []; //<th></th> 里面的内容
    this.currentColumns.forEach((col, index) => {
      if (col.sortable) {
        ths.push(h('th', [
          h('span', col.title),
          h('a', {//升序的箭头
            class: {
              on: col._sortType === 'asc'
            },
            on: {
              click: () => {
                this.handleSortByAsc(index)
              }
            }
          }, '▲'),//
          h('a', {//升序的箭头
            class: {
              on: col._sortType === 'desc'
            },
            on: {
              click: () => {
                this.handleSortByDesc(index)
              }
            }
          }, '▼')//▼
        ]),)
      } else {
        ths.push(h('th', col.title));
      }
    });


    const trs = []; //<tr></tr> 里面的内容  每行的数据

    this.currentData.forEach((row) => {
      const tds = [];
      this.currentColumns.forEach((cell) => {
        tds.push(h('td', row[cell.key]))
      });
      trs.push(h('tr', tds))
    });

    return h('table', [
      h('thead', [
        h('tr', ths)
      ]),
      h('tbody', trs)
    ])
  },
  watch: {
    data() {
      this.makeData();
      const sortedColumn = this.currentColumns.filter((col) => {
        return col._sortType !== 'normal'
      });
      if(sortedColumn.length>0){
        if (sortedColumn[0]._sortType === 'asc') {
          this.handleSortByAsc(sortedColumn[0]._index)
        } else {
          this.handleSortByDesc(sortedColumn[0]._index)
        }
      }
    }
  }
}
