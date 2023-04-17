import http from '@/common/http.js'

export const getProductCategory = () => {
  return http({
    url: '/product/category',
    method: 'GET',
  })
}

export const getProductByCategory = (data) => {
  return http(
    {
      url: '/product',
      method: 'POST',
    },
    data
  )
}
