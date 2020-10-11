<template>
  <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
          <div class="modal-header">
              <span>{{title}}</span>
              <a href="javascript:;" class="icon-close" @click="closeModal"></a>
          </div>
          <div class="modal-body">
              <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <div v-if="btnType == 1">
              <a href="javascript:;" class="btn"  @click="sureBtn">{{sureText}}</a>
            </div>
            <div v-if="btnType == 2">
              <a href="javascript:;" class="btn-default" @click="closeModal">{{cancelText}}</a>
            </div>
            <div v-if="btnType == 3" class="btn-group">
              <a href="javascript:;" class="btn"  @click="sureBtn">{{sureText}}</a>
              <a href="javascript:;" class="btn-default" @click="closeModal">{{cancelText}}</a>
            </div>
          </div>
      </div>
  </div>
</template>
<script>
  export default{
    name:'modal',
    props:{
      // 弹框类型：小small、中middle、大large、表单form
      modalType:{
        type:String,
        default:'form'
      },
      // 弹框标题
      title:String,
      // 按钮类型: 1:确定按钮 2：取消按钮 3：确定取消
      btnType:String,
      sureText:{
        type:String,
        default:'确定'
      },
      cancelText:{
        type:String,
        default:'取消'
      },
      showModal:Boolean
    },
    methods:{
      closeModal(){
        this.$emit("doChange");
      },
      sureBtn(){
        this.$emit("sure");
      }
    }
  }
</script>
<style lang="scss">
@import './../assets/scss/modal.scss';
@import './../assets/scss/button.scss'
</style>