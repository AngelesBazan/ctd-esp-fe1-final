import { useSelector } from 'react-redux';
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = ({ pagina, setPagina }) => {

    const cantidadPersonajes = useSelector((state) => state.personajes.personajes.length);

    return <div className="paginacion">
        <button
            disabled={ pagina === 1 ? true : false }
            className={"primary"}
            onClick={ () => setPagina((prev) => prev-1) }
        >
            Anterior
        </button>

        <button
            disabled={ pagina === 42 || cantidadPersonajes < 20 ? true : false }
            className={"primary"}
            onClick={ () => setPagina((prev) => prev+1) }
        >
            Siguiente
        </button>
    </div>
}

export default Paginacion;