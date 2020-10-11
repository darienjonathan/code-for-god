import Firestore from "@/lib/firestore/Firestore";

export const keluargaCollection = new Firestore({ path: "keluarga" });

export const keluargaContentCollection = keluargaId =>
  new Firestore({ path: `keluarga/${keluargaId}/contents` });

export const umumCollection = new Firestore({ path: "umum" });

export const umumContentCollection = umumId => new Firestore({ path: `umum/${umumId}/contents` });

export const khotbahCollection = new Firestore({ path: "khotbah" });

export const renunganCollection = new Firestore({ path: "renungan" });

export const diyChristmasCollection = new Firestore({
  path: "diyChristmas",
  singleDocId: "YcIqbS05P44DSM3Xpcxl"
});

export const kingstoneCollection = new Firestore({
  path: "kingstone",
  singleDocId: "KaBZeuF3BkTiUiiJpgYB"
});

export const sabdaMediaKitCollection = new Firestore({
  path: "sabdaMediaKit",
  singleDocId: "JGm9ZU1WjsdZT4DwYf8H"
});
