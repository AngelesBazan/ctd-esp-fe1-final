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
                personajes: [...action.payload.personajes]
            };

        case "BORRAR_PERSONAJE":
            return {
                ...state, buscar: action.payload.buscar
            };

        case "AGREGAR_FAVORITO":
            return {
                ...state, favoritos: [...state.favoritos, ...action.payload.favoritos]
            };

        case "ELIMINAR_FAVORITO":
            return false;

        default:
            return {
                ...state
            };
    }
}