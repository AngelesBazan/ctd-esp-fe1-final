import { useDispatch } from 'react-redux';
import { useSelector } from '../../store/store';
import { agregarFavorito, eliminarFavorito } from '../../actions/personajes.actions';
import './boton-favorito.css';
import { FC } from 'react';
import Personaje from '../../types/personaje.types';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */


interface IFavoritoProps {
    personaje: Personaje;
}

const BotonFavorito:FC<IFavoritoProps> = ({personaje}) => {

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