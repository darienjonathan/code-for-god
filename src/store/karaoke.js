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
    },
    getContent(state, getters) {
      return (itemUid, contentUid) => {
        const item = getters.getItem(itemUid);
        if (!item) {
          return undefined;
        }
        const content = item.contents.find(([uid, content]) => contentUid === uid);
        return content ? content[1] : undefined;
      };
    }
  }
};
