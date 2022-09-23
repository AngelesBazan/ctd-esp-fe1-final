import { Action, ActionCreator } from "@reduxjs/toolkit";
import { getPersonajes } from "../services/getPersonajes";
import { personajeByName } from "../services/getPersonajeByName";


export const listarPersonajesPaginados = (personajes:any) => {
  return {
    type: "LISTAR_PERSONAJES",
    payload: {
      personajes
    }
  }
}

export const borrarPersonaje = () => {
  return {
    type: "BORRAR_PERSONAJE",
    payload: {
      buscar: ""
    }
  }
}

export const agregarFavorito = (favoritos:any) => {
  return {
    type: "AGREGAR_FAVORITO",
    payload: {
      favoritos
    }
  }
} 

export const eliminarFavorito = (favoritos:any) => {
  return {
    type: "ELIMINAR_FAVORITO",
    payload: {
      favoritos
    }
  }
}

export const limpiarFavoritos = (favoritos: any) => {
  return{
    type: "LIMPIAR_FAVORITOS",
    payload: {
      favoritos
    }
  }
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
