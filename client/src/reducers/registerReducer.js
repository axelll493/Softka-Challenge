import { types } from "../types/types"

export const registerReducer = (state = {}, action) => {
    switch (action.type) {
        case types.register:

            return {
                uid: action.payload.name,
                correo: action.payload.password,
                displayName: action.payload.email,

            }

        default:
            return state;
    }
}