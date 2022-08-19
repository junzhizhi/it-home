const key = 'junzhihzi'

// 存储token
export const setToken = (token) => {
  localStorage.setItem(key, token)
}

// 获取token
export const getToken = () => localStorage.getItem(key)

// 删除token
export const removeToken = () => {
  localStorage.removeItem(key)
}
