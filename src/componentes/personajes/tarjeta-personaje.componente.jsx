import { useSelector } from "react-redux";
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */

const TarjetaPersonaje = () => {

    // Esto selecciona del estado global el array de personajes
    const personajesPaginados = useSelector((state) => state.personajes.personajes);
   
    return <>
        {
            personajesPaginados?.map((personaje) => (
                <div key={personaje.id } className="tarjeta-personaje">
                    <img src={personaje.image} alt={personaje.name} />
                    <div className="tarjeta-personaje-body">
                        <span> {personaje.name} </span>
                        <BotonFavorito esFavorito={false} />
                    </div>
                </div>
            ))
        }

    </>
}

export default TarjetaPersonaje;