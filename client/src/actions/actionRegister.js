import { types } from '../types/types'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
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

export const registroEmailPasswordNombre = (name, email, password) => {


    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,
            email,
            password
        ).then(async ({ user }) => {

            await updateProfile(auth.currentUser,{
               displayName: name,
            })
            Swal.fire({
                icon: 'success',
                title: 'Usuario Registrado con exito',
                showConfirmButton: false,
                timer: 2000
              })

            dispatch(registerSincrono(user.uid, user.displayName, user.email))
            
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Datos Incorrectos',
                text: error,
                showConfirmButton: false,
                timer: 2000
              })
        })

    }
}


export const registerSincrono = (name, email, password) => {
    return {
        type: types.register,
        payload: {
            name,
            password,
            email,
        }
    }
}