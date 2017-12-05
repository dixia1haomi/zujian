
// ##下拉菜单~~
// ##依赖基础mask组件

// js
// sheetTap() {
//   this.setData({ sheetState: true })
//   console.log('sheetTap')
// },
// itemE(e) {
//   console.log('index-itemE', e.detail)
//   this.setData({ sheetDownItem: e.detail.item, sheetDownIndex: e.detail.index })
// }

// wxml
// <my-sheetdown class="" state= "{{sheetState}}" list= "{{mylist}}" bind: itemEvent = "itemE" cancel title>
//   <view catchtap="sheetTap" class='view' > {{sheetDownItem || '请选择' }}{ { sheetDownIndex } } </view>
// < /my-sheetdown>

Component({

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  properties: {
    //基础属性-控制菜单显示隐藏
    state: {
      type: Boolean,
      value: false,
      observer(state) {
        console.log('state', state)
        state && this.setData({ donghua: 'up', maskState: 'show' })   // 监听state状态，为ture时，开启up动画，显示蒙层
      }
    },

    // 接受的菜单数据
    list:{
      type:[Object,Array],
      value:['qqq','www']
    },

    // 是否显示title
    title: {
      type: Boolean,
      value: false
    },

    // 是否显示取消按钮
    cancel:{
      type:Boolean,
      value:false
    },
  },

  data: {
    donghua: '',  //动画-up-down
    maskState: '' //蒙层-控制mask基础组件的状态
  },

  methods: {
    hid() {
      // 延迟消失
      // this.setData({ donghua: 'down' }, () => {
      //   setTimeout(() => {
      //     this.setData({ maskState: 'hid' }, () => { this.setData({ state: false }) })
      //   }, 300)
      // })
      this.setData({ state: false })   //瞬间消失
    },

    // 接收菜单item数据，并传给页面，需要页面bind:itemEvent="page事件"接收
    item(e){
      console.log('itemEvent', e.currentTarget.dataset)
      this.triggerEvent('itemEvent', e.currentTarget.dataset)
      this.hid()  // 隐藏菜单
    },

    // 取消按钮
    cancel(){   
      this.hid()  // 隐藏菜单
    }
  }

})