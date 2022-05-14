import { typesAcumulado } from '../types/types'

const initialState = {
    acumulado: 0
}

export const acumuladoReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesAcumulado.setAcumulado:

            return {
                acumulado : action.payload
            }

        default:
            return state;
    }
}