import { Reducer } from "react";
import { PersonajesAcciones } from "../actions/personajes.actions";
import { Personaje, Episode } from "../types/personaje.types";

interface EstadoInicial {
    personajes: Personaje[];
    buscar: string,
    pagina: number,
    favoritos: Personaje[];
    personajeSeleccionado: string;
    episodios: Episode[];
}

const estadoInicial:EstadoInicial = {
    personajes: [],
    buscar: "",
    pagina: 1,
    favoritos: [],
    personajeSeleccionado: "",
    episodios: []
}

export const personajeReducer:Reducer<EstadoInicial, PersonajesAcciones> = (state = estadoInicial, action) => {
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

        case "MOSTRAR_DETALLE":
            return {
                ...state,
                personajeSeleccionado: action.payload.personajeSeleccionado
            }

        case "LISTAR_EPISODIOS":
            return {
                ...state,
                episodios: action.payload.episodios
            }

        default:
            return {
                ...state
            };
    }
}