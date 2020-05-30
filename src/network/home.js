
import request from './index'

export function getLocationData(geohash) {
  return request({
    url: `/position/${geohash}`,
    method: 'get',
    param: geohash
  })
}

export function getFoodCategoryData() {
  return request({
    url: '/index_category',
    method: 'get'
  })
}

export function getShopsData(latitude, longitude) {
  return request({
    url: `/shops?latitude=${latitude}&longitude=${longitude}`,
    method: 'get'
  })
}