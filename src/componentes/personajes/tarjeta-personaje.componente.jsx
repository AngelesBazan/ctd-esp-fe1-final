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

    const personajesPaginados = useSelector((state) => state.personajes.personajes);
    
    /* const favoritos = useSelector((state) => state.personajes.favoritos);
    console.log(favoritos); */

    return <>
        {
            personajesPaginados?.map((personaje) => (
                <div key={personaje.id} className="tarjeta-personaje">
                    <img src={personaje.image} alt={personaje.name} />
                    <div className="tarjeta-personaje-body">
                        <span> {personaje.name} </span>
                        <BotonFavorito personaje={personaje} />
                    </div>
                </div>
            ))
        }

{/* 

    const TarjetaPersonaje: FC<Personaje> = (personaje: Personaje) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const mostrarDetalles = () => {
        dispatch(mostrarDetallesPersonaje(personaje));
        navigate("/detalle");
    }

    return <div className="tarjeta-personaje">
        <img src={personaje.image} alt={personaje.name} onClick={mostrarDetalles}/>
        <div className="tarjeta-personaje-body">
            <span>{personaje.name}</span> 
            <BotonFavorito {...personaje}/>
        </div>
    </div>
}
    
    export default TarjetaPersonaje;
        */}

    </>
}

export default TarjetaPersonaje;