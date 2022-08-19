// 封装请求方法
import request from '@/utils/request'
// 登录——验证登录信息
export const loginAPI = ({ mobile, code }) =>
  request({
    url: '/v1_0/authorizations',
    method: 'POST',
    data: {
      mobile,
      code
    }
  })

// 频道——获取用户频道，如果没有登陆获取默认频道
export const getUserChannersAPI = () =>
  request({
    url: '/v1_0/user/channels',
    method: 'GET'
  })
// 频道——获取所有的频道
export const getAllChannelsAPI = () =>
  request({
    url: '/v1_0/channels',
    method: 'GET'
  })
// 文章——获取文章列表
export const getAirticleListAPI = ({ channel_id, timestamp }) =>
  request({
    url: '/v1_0/articles',
    method: 'GET',
    params: {
      channel_id,
      timestamp
    }
  })
// 反馈——不感兴趣
export const disLikeAPI = (atrId) =>
  request({
    url: '/v1_0/article/dislikes',
    method: 'POST',
    data: {
      target: atrId
    }
  })
// 举报——举报文章
export const reportArticleAPI = ({ id, type }) =>
  request({
    url: '/v1_0/article/reports',
    method: 'POST',
    // headers: {
    //   Authorization: `Bearer ${getToken()}`
    // },
    data: {
      target: id,
      type: type,
      remark: ''
    }
  })
