import Firestore from "@/lib/firestore/Firestore";

export const keluargaCollection = new Firestore({ path: "keluarga" });

export const keluargaContentCollection = keluargaId =>
  new Firestore({ path: `keluarga/${keluargaId}/contents` });

export const umumCollection = new Firestore({ path: "umum" });

export const umumContentCollection = umumId => new Firestore({ path: `umum/${umumId}/contents` });

export const khotbahCollection = new Firestore({ path: "khotbah" });

export const renunganCollection = new Firestore({ path: "renungan" });

export const karaokeCollection = new Firestore({ path: "karaoke" });

export const karaokeContentCollection = karaokeId =>
  new Firestore({ path: `karaoke/${karaokeId}/contents` });

export const bioskopCollection = new Firestore({ path: "bioskop" });

export const gamesCollection = new Firestore({ path: "games" });

export const liturgiCollection = new Firestore({ path: "liturgi" });

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
