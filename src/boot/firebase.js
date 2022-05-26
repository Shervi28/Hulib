import firebase from "firebase/compat/app"

import "firebase/compat/firestore"

import "firebase/compat/auth";



const firebaseConfig = {
};



firebase.initializeApp(firebaseConfig)



let db = firebase.firestore()



firebase.getCurrentUser = () => {

  return new Promise((resolve, reject) => {

    const unsubscribe = firebase.auth().onAuthStateChanged(user => {

      unsubscribe();

      resolve(user);

    }, reject);

  })

};



export default db
