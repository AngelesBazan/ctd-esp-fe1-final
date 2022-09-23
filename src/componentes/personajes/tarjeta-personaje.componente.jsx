import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BotonFavorito from '../botones/boton-favorito.componente';
import { detallePersonaje } from '../../actions/personajes.actions';
import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */

const TarjetaPersonaje = ({personajesPaginados}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDetalle = (id) => {
        dispatch(detallePersonaje(id));
        navigate('/detalle');
    }

    return <>
        {
            personajesPaginados?.map((personaje) => (
                <div
                    key={personaje.id}
                    className="tarjeta-personaje"
                    onClick={ () => handleDetalle(personaje.id) }
                >
                    <img src={personaje.image} alt={personaje.name} />
                    <div className="tarjeta-personaje-body">
                        <span> {personaje.name} </span>
                        <BotonFavorito personaje={personaje} />
                    </div>
                </div>
            ))
        }

    </>
}

export default TarjetaPersonaje;