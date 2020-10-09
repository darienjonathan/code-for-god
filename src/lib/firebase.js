import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";
import firebaseConfig from "@/configs/firebase";

const getAppWithConfig = (config = firebaseConfig) => {
  const configKeys = Object.keys(config);
  return firebase.apps.find(
    app => configKeys.filter(key => config[key] === app.options[key]).length === configKeys.length
  );
};

export const initializeApp = () => {
  if (getAppWithConfig()) {
    return;
  }
  firebase.initializeApp(firebaseConfig, "[CLIENT]");
};
const getApp = () => getAppWithConfig() || firebase.initializeApp(firebaseConfig);

export const getFirebaseAuth = () => getApp().auth();
export const getFirebaseFirestore = () => getApp().firestore();
export const getFirebaseDatabase = () => getApp().database();
export const getFirebaseFunctions = () => getApp().functions();
export const getFirebaseStorage = () => getApp().storage();
