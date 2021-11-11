import { db } from "./firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const setUserDb = async (uid, userData) => {
  await setDoc(doc(db, "users", uid), userData, { merge: true });
};

export const getAllergies = async (uid) => {
  const data = await (await getDoc(doc(db, "users", uid))).data();

  return data.allergies;
};
