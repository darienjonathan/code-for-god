import { getFirebaseFirestore } from "@/lib/firebase";

export default class Firestore {
  firestore = getFirebaseFirestore();
  path;
  constructor(path) {
    this.path = path;
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
      // eslint-disable-next-line no-console
      fn(data);
    });
  }

  async loadDocument(id) {
    const snapshot = await this.getRef()
      .doc(id)
      .get();
    return snapshot.data();
  }

  subscribeDocument(fn, id) {
    return this.getRef()
      .doc(id)
      .onSnapshot()
      .then(snapshot => {
        const data = snapshot.exists ? snapshot.data() : null;
        // eslint-disable-next-line no-console
        console.log("[subscribe document]", this.path, id);
        fn(data);
      });
  }
}
