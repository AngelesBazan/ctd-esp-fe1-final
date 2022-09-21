const estadoInicial = {
    personajes: [],
    favoritos: [],
    pagina: 1
}

export const personajeReducer = (state = estadoInicial, action) => {
    switch (action.type) {
        case "LISTAR_PERSONAJES":
            return {
                personajes: [...action.payload.personajes]
            };

        case "FILTRAR_PERSONAJE":
            return true;

        case "AGREGAR_FAVORITO":
            return true;

        case "ELIMINAR_FAVORITO":
            return false;

        default:
            return {
                ...state
            };
    }
}

// Filtrar personajes por el input
// Limpiar filtro: borrar input

// Agregar y sacar favoritos