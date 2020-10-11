import { getFirebaseFirestore } from "@/lib/firebase";

export default class Firestore {
  firestore = getFirebaseFirestore();
  path;
  singleDocId;
  constructor({ path, singleDocId }) {
    this.path = path;
    if (singleDocId) {
      this.singleDocId = singleDocId;
    }
  }

  getRef() {
    return this.firestore.collection(this.path);
  }

  buildQuery({ wheres = [], orderBy, limit } = {}) {
    let ref = this.getRef();
    wheres.forEach(([fieldPath, opStr, val]) => {
      ref = ref.where(fieldPath, opStr, val);
    });
    if (orderBy) {
      ref = ref.orderBy(...orderBy);
    }
    if (limit) {
      ref = ref.limit(limit);
    }
    return ref;
  }

  dumpSnapshot(snapshot) {
    const m = new Map();
    snapshot.forEach(doc =>
      m.set(doc.id, {
        ...doc.data()
      })
    );
    return [...m.entries()];
  }

  async loadCollection({ wheres = [], orderBy, limit } = {}) {
    const query = this.buildQuery({ wheres, orderBy, limit });
    const snapshot = await query.get();
    return this.dumpSnapshot(snapshot);
  }

  subscribeCollection(fn, { wheres = [], orderBy, limit } = {}) {
    const query = this.buildQuery({ wheres, orderBy, limit });
    return query.onSnapshot(snapshot => {
      const data = this.dumpSnapshot(snapshot);
      fn(data);
    });
  }

  async loadDocument(id) {
    id = this.singleDocId || id;
    const snapshot = await this.getRef()
      .doc(id)
      .get();
    return snapshot.data();
  }

  subscribeDocument(fn, id) {
    id = this.singleDocId || id;
    return this.getRef()
      .doc(id)
      .onSnapshot()
      .then(snapshot => {
        const data = snapshot.exists ? snapshot.data() : null;
        fn(data);
      });
  }
}
