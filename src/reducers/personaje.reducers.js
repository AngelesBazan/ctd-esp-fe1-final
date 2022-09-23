const estadoInicial = {
    personajes: [],
    buscar: "",
    pagina: 1,
    favoritos: []
}

export const personajeReducer = (state = estadoInicial, action) => {
    switch (action.type) {
        case "LISTAR_PERSONAJES":
            return {
                ...state,
                personajes: [...action.payload.personajes]
            };

        case "BORRAR_PERSONAJE":
            return {
                ...state, buscar: action.payload.buscar
            };

        case "AGREGAR_FAVORITO":
            return {
                ...state, 
                favoritos: [ action.payload.favoritos, ...state.favoritos.filter(favorito => favorito.id !== action.payload.favoritos.id)]
            }; 
            
        case "ELIMINAR_FAVORITO":
            return {
                ...state,
                favoritos: [...state.favoritos.filter((favorito) => favorito.id !== action.payload.favoritos.id)]
            }

        case "LIMPIAR_FAVORITOS":
            return {
                ...state,
                favoritos: []
            }

        default:
            return {
                ...state
            };
    }
}