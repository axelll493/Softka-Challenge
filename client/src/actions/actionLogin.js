import { types } from '../types/types'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import Swal from 'sweetalert2';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyACy3pO5r8ukPRYC_03fbx2OB-3m45pPT8",
    authDomain: "questions-49428.firebaseapp.com",
    projectId: "questions-49428",
    storageBucket: "questions-49428.appspot.com",
    messagingSenderId: "616326307440",
    appId: "1:616326307440:web:e12b46ec6ac64a5dd49eb5"
  };

initializeApp(firebaseConfig);

const auth = getAuth();

export const loginEmailPassword = (email, password) => {
    return (dispatch) => {
        signInWithEmailAndPassword(auth,
            email,
            password
        ).then(({ user }) => {
            console.log(user)
            console.log(user.providerData[0])
            const data = user.providerData[0];
            dispatch(loginSincrono(user.uid, data.displayName, data.email))
            Swal.fire({
                icon: 'success',
                title: 'ha sido reconocido',
                showConfirmButton: false,
                timer: 2000
              })
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'No ha sido reconocido',
                text: error,
                showConfirmButton: false,
                timer: 2000
              })
        })
    }
}

export const loginSincrono = (uid, displayName, correo) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
            correo
        }
    }
}

export const logout = () => {

    return (dispatch) => {
        signOut(auth)
            .then(user => {
                dispatch(logoutSincrono())
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const logoutSincrono = () => {
    return {
        type: types.logout
    }
}
