import { typesPregunta } from '../types/types'

const initialState = {
    pregunta: 0
}

export const preguntaReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesPregunta.setPregunta:

            return {
                pregunta : action.payload
            }

        default:
            return state;
    }
}