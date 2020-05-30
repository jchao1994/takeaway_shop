
export default {
  editLocation(state, payload) {
    state.address = Object.freeze(payload.location);
  },
  editFoodCategory(state, payload) {
    state.category = Object.freeze(payload.foodCategory);
  },
  editShops(state, payload) {
    state.shops = Object.freeze(payload.shops);
  },
  editSearchShops(state, payload) {
    state.searchShops = Object.freeze(payload.searchShops);
  },
  editShopInfo(state, payload) {
    state.shopInfo = payload.shopInfo;
  }
}