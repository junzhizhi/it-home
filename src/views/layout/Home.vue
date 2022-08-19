<template>
  <div class="home-container">
    <!-- 头部导航栏 -->
    <div class="header">
      <van-nav-bar fixed>
        <template #left>
          <img class="logo" src="@/assets/logo.png" alt="" />
        </template>
        <template #right>
          <!-- 坑: postcss只能翻译style里css样式代码, 标签内行内样式它无法转换px转rem, 所以需要自己手动计算 -->
          <van-icon name="search" size="0.48rem" color="#fff" />
        </template>
      </van-nav-bar>
    </div>
    <!-- 标签栏 -->
    <div class="my-tab">
      <van-tabs v-model="channelsId" sticky offset-top="1.22267rem">
        <van-tab :title="item.name" v-for="item in userChannelList" :key="item.id" :name="item.id">
          <AirticleList :channelsListId="channelsId"></AirticleList>
        </van-tab>
      </van-tabs>
      <!-- 编辑频道图标 -->
      <van-icon name="plus" class="moreChannels" size="0.37333333334rem" @click="showPopup" />
    </div>
    <div>
      <van-popup v-model="show" class="channels-popup">
        <ChannelEdit :userchannels="userChannelList" :morechannels="moreChannels"></ChannelEdit>
      </van-popup>
    </div>
  </div>
  <!-- 更多频道弹出层 -->

</template>
<script>
import { getUserChannersAPI, getAllChannelsAPI } from '@/api/index'
import ChannelEdit from '@/views/ChannelEdit'
import AirticleList from '@/views/layout/components/Airticle/AirticleList'
export default {
  data() {
    return {
      channelsId: 0,
      userChannelList: [],
      allChannelList: [],
      show: false
    }
  },
  components: {
    AirticleList,
    ChannelEdit
  },
  async created() {
    // 用户已选获取频道列表
    const channels = await getUserChannersAPI()
    this.userChannelList = channels.data.data.channels
    // 获取全部频道列表
    const res = await getAllChannelsAPI()
    this.allChannelList = res.data.data.channels
  },
  methods: {
    showPopup() {
      this.show = true
    }
  },
  computed: {
    moreChannels() {
      // 返回新数组
      // const newArr = this.allChannelList.filter(channel => {
      //   const index = this.userChannelList.findIndex(anotherChannel => {
      //     // 判断总频道和已选频道中的这一项是否重复，重复返回true，find返回具体id
      //     return anotherChannel.id === channel.id
      //   })
      //   if (index > -1) {
      //     // 说明找到了重复的，进行去重
      //     // filter过滤规则是返回true的进入新数组
      //     return false
      //   } else {
      //     return true
      //   }
      // })
      // return newArr

      // 简写
      return this.allChannelList.filter(channel => this.userChannelList.findIndex(anotherChannel => anotherChannel.id === channel.id) === -1)
    }
  }
}
</script>

<style scoped lang="less">
.logo {
  width: 100px;
  height: 30px;
}
.my-tab {
  padding-top: 44px;
}
.van-nav-bar {
  background-color: rgb(35, 112, 245);
}
/deep/ .van-tabs__wrap {
  padding-right: 30px;
  background-color: rgb(255, 255, 255);
}

// 设置小图标的样式
.moreChannels {
  position: fixed;
  top: 62px;
  right: 8px;
  z-index: 999;
}
// 弹出层样式
.channels-popup {
  width: 100vw;
  height: 100vh;
}
</style>
