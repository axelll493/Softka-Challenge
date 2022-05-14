import { typesAcumulado } from '../types/types'

export const actualizaAcumu = (acumulado) => {
    return {
        type: typesAcumulado.setAcumulado,
        payload: acumulado
    }
}
