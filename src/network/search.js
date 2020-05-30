
import request from './index'

export function getSearchData(query) {
  return request({
    url: `/search_shops?keyword=${query.keyword}&geohash=${query.geohash}`,
    query
  })
}