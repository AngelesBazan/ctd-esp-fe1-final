import { personajesByName } from '../../actions/personajes.actions';
import { useDispatch, useSelector } from "react-redux";
import './filtros.css';

const Filtros = () => {

    const dispatch = useDispatch();

    const buscador = useSelector(state => state.personajes.buscar);

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input
            type="text"
            placeholder="Rick, Morty, Beth, Alien, ...etc"
            name="nombre"
            autoComplete='off'
            value={ buscador }
            onChange={ e => dispatch(personajesByName(e.target.value)) }
        />
    </div>
}

export default Filtros;