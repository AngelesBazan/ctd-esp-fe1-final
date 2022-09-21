import { Action, ActionCreator } from "@reduxjs/toolkit";
import { getPersonajes } from "../services/getPersonajes";

// esto es para después despachar la acción del reducer en el thunk llamada asíncrona
export const listarPersonajesPaginados = (personajes:any) => {
  return {
    type: "LISTAR_PERSONAJES",
    payload: {
      personajes
    }
  }
}

// Thunk
export const listarPersonajes = (page: number) => {
  return async (dispatch:any, getState:any) => {
    try {
      const personajes = await getPersonajes(page);
      // acá estaría llenando el estado del array personajes con la data que viene de la api
      dispatch(listarPersonajesPaginados(personajes));

		} catch (error) {
      const errorMessage = new Error('¡Ups! Algo salió mal...');
      return errorMessage;
    }
  };

}