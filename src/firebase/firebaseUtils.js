import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var config = {
    apiKey: "AIzaSyA8N26IAXf0T2WsJnpQjwoOfr99LGIMFO4",
    authDomain: "furnature-1.firebaseapp.com",
    projectId: "furnature-1",
    storageBucket: "furnature-1.appspot.com",
    messagingSenderId: "376779392210",
    appId: "1:376779392210:web:517cf4f8f6f4fdb426990b"
  };

  

// creating userProfile for user data
export const createUserProfileDocument = async (userAuth, AdditionalData) =>{
    
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // const userRef = db.collection('users').doc({userId});
    const userSnapshot = await userRef.get();
    // console.log("SNAPSHOT: ",userSnapshot)

    if(!userSnapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...AdditionalData
            })
        }catch(error){
            console.log("error creating new user",error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

//   Authentication
export const auth = firebase.auth();

//   Firestore
export  const firestore = firebase.firestore();

// Google Sign in
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;