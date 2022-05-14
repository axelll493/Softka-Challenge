import { typesGanador } from '../types/types'
import { addDoc, collection, getDocs, where, query } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { actualizaAcumu } from './actualizaAcumulado';

const firebaseConfig = {
    apiKey: "AIzaSyACy3pO5r8ukPRYC_03fbx2OB-3m45pPT8",
    authDomain: "questions-49428.firebaseapp.com",
    projectId: "questions-49428",
    storageBucket: "questions-49428.appspot.com",
    messagingSenderId: "616326307440",
    appId: "1:616326307440:web:e12b46ec6ac64a5dd49eb5"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const enviarGanadores = (acumulado, nombre, correo) => {

    return async (dispatch) => {
        const newGanador = {
            acumulado, 
            nombre, 
            correo
        }
        addDoc(collection(db, "ganadores"), newGanador)
            .then(resp => {
                console.log(resp)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const mostrarGanadoresAsincronico = () => {
    return async (dispatch) => {
        const datos = await getDocs(collection(db, "ganadores"));
        const ganadores = [];
        datos.forEach((document) => {
            ganadores.push({
                ...document.data()
            })
        })
        dispatch(mostrarGanadoresSincrono(ganadores))
    }
}

export const mostrarGanadoresSincrono = (ganadores) => {
    return {
        type: typesGanador.mostrarGanadores,
        payload: ganadores
    }
}

export const mostrarGanadorAsincronico = (correo) => {
    return async (dispatch) => {
        const coleccion = collection(db, "ganadores")
        const q = query(coleccion, where("correo", "==", correo))
        const result = await getDocs(q)
        const ganador = [];
        result.forEach((document) => {
            ganador.push({
                ...document.data()
            })
            dispatch(actualizaAcumu(document.data().acumulado))
        })
        dispatch(mostrarGanadorSincrono(ganador))
    }
}

export const mostrarGanadorSincrono = (ganador) => {
    return {
        type: typesGanador.mostrarGanador,
        payload: ganador
    }
}

export const resetGanador = () => {
    return {
        type: typesGanador.reset,
    }
}