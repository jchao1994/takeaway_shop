
import {
  getLocationData,
  getFoodCategoryData,
  getShopsData
} from '@/network/home'

import {
  getSearchData
} from '@/network/search'

export default {
  // home
  async getLocation({commit, state}) {
    const geohash = `${state.latitude},${state.longitude}`;
    const result = await getLocationData(geohash);
    commit('editLocation', {
      location: result.data.data
    });
  },
  async getFoodCategory({commit, state}) {
    const result = await getFoodCategoryData();
    commit('editFoodCategory', {
      foodCategory: result.data.data
    })
  },
  async getShops({commit, state}) {
    const result = await getShopsData(state.latitude, state.longitude);
    commit('editShops', {
      shops: result.data.data
    })
  },


  // search
  async getSearchShops({commit, state}, payload) {
    const geohash = `${state.latitude},${state.longitude}`;
    const { keyword } = payload;
    const result = await getSearchData({
      geohash,
      keyword
    })
    commit('editSearchShops', {
      searchShops: result.data.data
    })
  }
}