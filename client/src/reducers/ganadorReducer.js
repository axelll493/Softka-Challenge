import { typesGanador } from '../types/types'

const initialState = {}

export const ganadorReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesGanador.mostrarGanador:

            return {
                ganador: action.payload
            }

        case typesGanador.reset:
            return {
            }

        default:
            return state;
    }
}