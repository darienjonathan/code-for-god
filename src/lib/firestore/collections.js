import Firestore from "@/lib/firestore/Firestore";

export const keluargaCollection = new Firestore("keluarga");

export const keluargaContentCollection = keluargaId =>
  new Firestore(`keluarga/${keluargaId}/contents`);
