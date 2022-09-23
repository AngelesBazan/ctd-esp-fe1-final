import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { getPersonajes } from "../services/getPersonajes";
import { personajeByName } from "../services/getPersonajeByName";
/* import { getEpisodio } from "../services/getEpidosio"; */
import { Personaje } from "../types/personaje.types";
import { IRootState } from "../store/store";

export interface ListarPersonajesPaginadosAction extends Action {
  type: "LISTAR_PERSONAJES",
  payload: {
    personajes: Personaje[]
  }
}

export interface BorrarPersonajeAction extends Action {
  type: "BORRAR_PERSONAJE",
  payload: {
    buscar: string
  }
}

export interface AgregarFavoritoAction extends Action {
  type: "AGREGAR_FAVORITO",
  payload: {
    favoritos: Personaje[]
  }
}

export interface EliminarFavoritoAction extends Action {
  type: "ELIMINAR_FAVORITO",
    payload: {
      favoritos: Personaje[]
    }
}

export interface LimpiarFavoritoAction extends Action {
  type: "LIMPIAR_FAVORITOS",
    payload: {
      favoritos: Personaje[]
    }
}

export interface DetallePersonajeAction extends Action {
  type: "MOSTRAR_DETALLE",
    payload: {
      personajeSeleccionado: Personaje[]
    }
}

export interface ListarEpisodiosAction extends Action {
  type: "LISTAR_EPISODIOS",
    payload: {
      episodios: Personaje[]
    }
}

export const listarPersonajesPaginados: ActionCreator<ListarPersonajesPaginadosAction> = (personajes:Personaje[]) => {
  return {
    type: "LISTAR_PERSONAJES",
    payload: {
      personajes
    }
  }
}

export const borrarPersonaje: ActionCreator<BorrarPersonajeAction> = () => {
  return {
    type: "BORRAR_PERSONAJE",
    payload: {
      buscar: ""
    }
  }
}

export const agregarFavorito: ActionCreator<AgregarFavoritoAction> = (favoritos:Personaje[]) => {
  return {
    type: "AGREGAR_FAVORITO",
    payload: {
      favoritos
    }
  }
} 

export const eliminarFavorito: ActionCreator<EliminarFavoritoAction> = (favoritos:Personaje[]) => {
  return {
    type: "ELIMINAR_FAVORITO",
    payload: {
      favoritos
    }
  }
}

export const limpiarFavoritos: ActionCreator<LimpiarFavoritoAction> = (favoritos: Personaje[]) => {
  return{
    type: "LIMPIAR_FAVORITOS",
    payload: {
      favoritos
    }
  }
}

export const detallePersonaje = (personajeSeleccionado: any) => {
  return {
    type: "MOSTRAR_DETALLE",
    payload: {
      personajeSeleccionado
    }
  }
}

export const listarEpisodios = (episodios: any) => {
  return {
    type: "LISTAR_EPISODIOS",
    payload: {
      episodios
    }
  }
}

export interface ListarPersonajesAction extends ThunkAction<void, IRootState, unknown, PersonajesAcciones> {

}

export const listarPersonajes = (pag: number) => {
  return async (dispatch:any) => {
    try {
      const personajes = await getPersonajes(pag);
      dispatch(listarPersonajesPaginados(personajes));

		} catch (error) {
      const errorMessage = new Error('¡Ups! Algo salió mal...');
      return errorMessage;
    }
  };
}

export const personajesByName = (nombre: string) => {
  return async (dispatch:any) => {
    try {
      const resultado = await personajeByName(nombre);
      dispatch(listarPersonajesPaginados(resultado));
      
		} catch (error) {
      const errorMessage = new Error('¡Ups! Algo salió mal...');
      return errorMessage;
    }
  };
}

export type PersonajesAcciones = ReturnType<typeof listarPersonajesPaginados> | ReturnType<typeof borrarPersonaje> | ReturnType<typeof agregarFavorito> | ReturnType<typeof eliminarFavorito> | ReturnType<typeof limpiarFavoritos> | ReturnType<typeof detallePersonaje>  | ReturnType<typeof listarEpisodios>


/* export const listarTodosEpisodios = (listarEpisodios: any) => {
  return async (dispatch:any) => {
    try {

      // Acá necesito iterar el array de episodios (de listarEpisodios) para
      // Pasale hacer una petición por cada endpoint del array
      // Pero no me salió...

      const resultado = await getEpisodio(url);
      
      
		} catch (error) {
      const errorMessage = new Error('¡Ups! Algo salió mal...');
      return errorMessage;
    }
  };
} */