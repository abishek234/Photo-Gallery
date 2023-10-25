import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBZRNKIeVTL-9EYVksJBiCrU8euXNNQ6nM",
  authDomain: "photo-8f42d.firebaseapp.com",
  projectId: "photo-8f42d",
  storageBucket: "photo-8f42d.appspot.com",
  messagingSenderId: "568464493071",
  appId: "1:568464493071:web:359f83983fb279a631717a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };