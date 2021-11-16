import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBr17udDzERNlSWIiEEQ9m26Ae7KjlJwd4',
  authDomain: 'cooking-warrior-site.firebaseapp.com',
  projectId: 'cooking-warrior-site',
  storageBucket: 'cooking-warrior-site.appspot.com',
  messagingSenderId: '142853564312',
  appId: '1:142853564312:web:61a601edd8084d75366ded',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
