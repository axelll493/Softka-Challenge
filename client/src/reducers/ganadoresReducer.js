import { typesGanador } from '../types/types'

const initialState = {}

export const ganadoresReducer = (state = initialState, action) => {
    switch (action.type) {

        case typesGanador.mostrarGanadores:

            return {
                ganadores: action.payload
            }

        default:
            return state;
    }
}

