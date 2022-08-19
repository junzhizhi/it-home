<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{artobj.title}}</span>

          <!-- 单个图片 -->
          <img v-if="artobj.cover.type === 1" class="thumb" :src="artobj.cover.images[0]" alt="">
        </div>
        <!-- 多个图片 -->
        <div class="thumb-box" v-if="artobj.cover.type > 1">
          <img v-for="(image,index) in artobj.cover.images" :key="index" class="thumb" :src="image" alt="">

        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <div>
            <span>{{ artobj.aut_name }}</span>
            <span>{{ artobj.comm_count }}评论</span>
            <span>{{ formatTime(artobj.pubdate) }}</span>
          </div>
          <!-- 反馈按钮 -->
          <van-icon name="cross" @click="show = true" />
        </div>
      </template>
    </van-cell>
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" :cancel-text="bottomText" @cancel="onCancel" @close="onClose" />
  </div>
  <!-- 一条文章单元格 -->

</template>

<script>
import { timeAgo } from '@/utils/date'
// import { Toast } from 'vant'
import { firstActions, secondActions } from '@/api/report'
export default {
  props: {
    artobj: Object
  },
  data() {
    return {
      show: false,
      actions: firstActions,
      bottomText: '取消'
    }
  },
  methods: {
    formatTime: timeAgo,
    onSelect(action, item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      // this.show = false
      // Toast(item.name)
      if (action.name === '反馈垃圾内容') {
        this.actions = secondActions
        this.bottomText = '返回'
      } else if (action.name === '不感兴趣') {
        this.$emit('disLikeArt', this.artobj.art_id)
        this.show = false
      } else {
        this.$emit('reportArt', this.artobj.art_id, action.value)
        this.show = false
      }
    },
    onCancel() {
      if (this.bottomText === '返回') {
        this.show = true
        this.actions = firstActions
        this.bottomText = '取消'
      }
    },
    onClose() {
      this.actions = firstActions
    }
  }
}
</script>

<style scoped lang="less">
/* 标题样式 */
.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

/* label描述样式 */
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 文章信息span */
.label-box span {
  margin: 0 3px;
  &:first-child {
    margin-left: 0;
  }
}
/* 图片的样式, 矩形黄金比例：0.618 */
.thumb {
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

/* 三图, 图片容器 */
.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>
