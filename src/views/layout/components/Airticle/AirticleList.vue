<template>
  <div class="aiticle-list">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="(  •̀֊•́ ) ̖́-
新消息来啦~">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多惹꒰๑•⌓︎•๑꒱ᵎᵎᵎ
" @load="onLoad" :immediate-check="false" loading-text="(((o(*ﾟ▽ﾟ*)o)))
努力加载中~" offset="50">
        <AirticleItem v-for="item in airticleList" :key="item.art_id" :artobj="item" @disLikeArt="ondisLike" @reportArt="onReportArt"></AirticleItem>
      </van-list>
    </van-pull-refresh>

  </div>
</template>

<script>
import AirticleItem from '@/views/layout/components/Airticle/AirticleItem'
import { getAirticleListAPI, disLikeAPI, reportArticleAPI } from '@/api/index'
import { Notify } from 'vant'
export default {
  props: {
    channelsListId: Number
  },
  data() {
    return {
      airticleList: [],
      // list: [],
      loading: false,
      finished: false,
      theTime: new Date().getTime(),
      isLoading: false
    }
  },
  components: {
    AirticleItem
  },
  async created() {
    // 获取文章列表
    this.getAirticleList()
  },
  methods: {
    async getAirticleList() {
      const airticles = await getAirticleListAPI({
        channel_id: this.channelsListId,
        timestamp: this.theTime
      })
      this.theTime = airticles.data.data.pre_timestamp
      this.airticleList = [...this.airticleList, ...airticles.data.data.results]
      if (this.theTime === null) {
        this.finished = true
      }
      this.loading = false
      this.isLoading = false
    },
    async onLoad() {
      this.getAirticleList()
    },
    async onRefresh() {
      this.theTime = new Date().getTime()
      this.airticleList = []
      this.getAirticleList()
    },
    async ondisLike(id) {
      await disLikeAPI(id)
      Notify({ type: 'success', message: '(,,•́ . •̀,,)已收到！' })
    },
    async onReportArt(id, value) {
      await reportArticleAPI({
        id: id,
        type: value
      })
      Notify({ type: 'warning', message: '举报成功啦！' })
    }
  }
}
</script>

<style>
</style>
