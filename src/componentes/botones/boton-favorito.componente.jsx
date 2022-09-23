import { useDispatch, useSelector } from 'react-redux';
import { agregarFavorito, eliminarFavorito } from '../../actions/personajes.actions';
import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito = ({personaje}) => {

    const dispatch = useDispatch();
    const favoritos =  useSelector((state) => state.personajes.favoritos);

    const esFavorito = favoritos.find((favorito) => favorito.id === personaje.id); 

    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

     const handleFav = () => {
        if(!esFavorito) {
            dispatch(agregarFavorito(personaje));
        } else{
            dispatch(eliminarFavorito(personaje));
        }
    }


    return <div className="boton-favorito" onClick={handleFav}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;