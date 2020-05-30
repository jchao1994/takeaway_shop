
export default {
  location(state) {
    return state.address.name;
  },
  foodCategory(state) {
    return state.category;
  },
  foodCategoryFirst(state) {
    return state.category.slice(0, 8);
  },
  foodCategorySecord(state) {
    return state.category.slice(8);
  },
  shops(state) {
    return state.shops;
  },
  searchShops(state) {
    return state.searchShops;
  },
  shopInfo(state) {
    return state.shopInfo;
  }
}