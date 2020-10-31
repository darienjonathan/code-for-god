export default {
  state: {
    items: []
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    }
  },
  getters: {
    getItem(state) {
      return itemUid => {
        const item = state.items.find(([uid, item]) => itemUid === uid);
        return item ? item[1] : undefined;
      };
    }
  }
};
