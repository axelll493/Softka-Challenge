import { typesPregunta } from '../types/types'

export const actualizaNumPreg = (numero) => {
    return {
        type: typesPregunta.setPregunta,
        payload: numero
    }
}
