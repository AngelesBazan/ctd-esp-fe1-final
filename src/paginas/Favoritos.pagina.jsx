import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useDispatch, useSelector } from "react-redux";
import { limpiarFavoritos } from "../actions/personajes.actions";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {

    const favoritos = useSelector((state) => state.personajes.favoritos);
    const dispatch = useDispatch();

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={ () => dispatch(limpiarFavoritos()) }>Eliminar todos</button>
        </div>
        <GrillaPersonajes personajes={favoritos}/>
    </div>
}

export default PaginaFavoritos