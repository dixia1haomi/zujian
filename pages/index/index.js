

Page({
  data: {
    // indexState:'',
    // sheetState:''
    mylist: ['aaa', 'bbb', 'ccc', 'ddd', 'bbb', 'ccc', 'ddd', 'bbb'],
    checkboxlist: [
      { name: '中国', value: 0 },
      { name: '美国', value: 1 },
      { name: '日本', value: 2 },
      { name: '中国1', value: 0 },
      { name: '美国1', value: 1 },
      { name: '日本1', value: 2 },
      { name: '中国2', value: 0 },
      { name: '美国2', value: 1 },
      { name: '日本2', value: 2 },
      { name: '中国3', value: 0 },
      { name: '美国3', value: 1 },
      { name: '日本3', value: 2 },
      { name: '中国4', value: 0 },
      { name: '美国4', value: 1 },
      { name: '日本4', value: 2 },
      { name: '中国5', value: 0 },
      { name: '美国5', value: 1 },
      { name: '日本5', value: 2 },
    ],
    checkboxValue: [],  // checkboxValue原始数组值
    checkboxValueStr: '', // checkboxValue.toStr后的值

    // toptips
    toptips_kaiguan:null,
    toptips_text:'',
  },

  onLoad: function () {
    console.log('load', this)
  },


  onReady() {
    // console.log('ready', this)
  },


  sheetTap() {
    this.setData({ sheetState: true })
    console.log('sheetTap')
  },
  itemE(e) {
    console.log('index-itemE', e.detail)
    this.setData({ sheetDownItem: e.detail.item, sheetDownIndex: e.detail.index })
  },


  //----------------------------------------
  checkboxTap() {
    this.setData({ checkboxState: true })
  },
  checkboxitemE(e) {
    console.log('index-checkboxitemE', e.detail)
    this.setData({ checkboxValue: e.detail, checkboxValueStr: e.detail.toString() })
  },

  //------------------------------------------
  cuowuTips(){
    this.setData({ toptips_kaiguan: true, toptips_text: '这是提示，1.5秒后消失' })
  }

})
