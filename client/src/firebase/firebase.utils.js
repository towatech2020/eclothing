import 'firebase/firestore';
import 'firebase/auth';

import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyBdBCbHUcdl_qz0yy4hOg_k_asl3_pbnkY',
  authDomain: 'eclothing-97570.firebaseapp.com',
  databaseURL: 'https://eclothing-97570.firebaseio.com',
  projectId: 'eclothing-97570',
  storageBucket: 'eclothing-97570.appspot.com',
  messagingSenderId: '19252957303',
  appId: '1:19252957303:web:bdbe1fc8273046822af672',
  measurementId: 'G-PCKTE2ZSHR',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log('called');
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const user = await userRef.get();

  if (!user.exists) {
    const { displayName, email } = userAuth;
    try {
      await userRef.set({
        displayName,
        email,
        createdAt: new Date(),
        ...additionalData,
      });
    } catch (e) {
      console.log('error creating user', e.message);
    }
  }
  return userRef;
};

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {

  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => 
  collections.docs.reduce( (ac, doc) => {
    const { title, items } = doc.data();
    ac[title.toLowerCase()] = {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
    return ac;
  }, {});

export const signInWithEmailAndPassword = async (email, password) => {
  return await auth.signInWithEmailAndPassword(email, password);
};
