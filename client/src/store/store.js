import {createStore, combineReducers, compose, applyMiddleware } from 'redux';
// import { obtenerLocalStorage, guardarLocalStorage}from '../localStorage'
import thunk from 'redux-thunk';
import { acumuladoReducer } from '../reducers/acumuladoReducer';
import { ganadoresReducer } from '../reducers/ganadoresReducer';
import { ganadorReducer } from '../reducers/ganadorReducer';
import { loginReducer } from '../reducers/loginReducer';
import { preguntaReducer } from '../reducers/preguntasReducer';
import { registerReducer } from '../reducers/registerReducer';
import { guardarSessionStorage, obtenerSessionStorage } from '../sessionStorage';


const reducers = combineReducers({

    login: loginReducer,
    register: registerReducer,
    preguntaNum: preguntaReducer,
    acumuladoVal: acumuladoReducer,
    ganador: ganadorReducer,
    ganadores: ganadoresReducer

})

const composeEnhancers = (typeof window !== 'undefined' &&
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const storageState = obtenerSessionStorage();

export const store = createStore(
    reducers, 
    storageState, 
    composeEnhancers(
      applyMiddleware(thunk))

)

store.subscribe(()=>{
  guardarSessionStorage({
    login: store.getState().login
  })
})