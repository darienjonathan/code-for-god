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
      return ItemUid => state.ItemArr.find(([uid, Item]) => ItemUid === uid);
    },
    getContent(state, getters) {
      return (ItemUid, contentUid) => {
        const Item = getters.getItem(ItemUid);
        return Item.contents.find(([uid, content]) => contentUid === uid);
      };
    }
  }
};
