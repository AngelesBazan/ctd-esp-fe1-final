import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { listarPersonajes } from "../actions/personajes.actions";
import { borrarPersonaje } from "../actions/personajes.actions";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */

const PaginaInicio = () => {

    const [ pagina, setPagina ] = useState(1);

    const dispatch = useDispatch();

    const personajes = useSelector((state) => state.personajes.personajes);

    useEffect(() => {
        dispatch(listarPersonajes(pagina));
        // eslint-disable-next-line
    }, [pagina]);

    const limpiarFiltro = () => {
        dispatch(borrarPersonaje());
        dispatch(listarPersonajes());
    }

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button
                className="danger"
                onClick={ limpiarFiltro }
            >
                Limpiar Filtros
            </button>
        </div>
        <Filtros />
        <Paginacion pagina={pagina} setPagina={setPagina}/>
        <GrillaPersonajes personajes={ personajes } />
        <Paginacion pagina={pagina} setPagina={setPagina}/>
    </div>
}

export default PaginaInicio