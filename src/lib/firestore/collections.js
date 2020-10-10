import Firestore from "@/lib/firestore/Firestore";

export const keluargaCollection = new Firestore("keluarga");

export const keluargaContentCollection = keluargaId =>
  new Firestore(`keluarga/${keluargaId}/contents`);

export const umumCollection = new Firestore("umum");

export const umumContentCollection = umumId => new Firestore(`umum/${umumId}/contents`);

export const khotbahCollection = new Firestore("khotbah");

export const renunganCollection = new Firestore("renungan");
