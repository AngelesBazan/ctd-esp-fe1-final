import { createContext, useState } from 'react';

export const FavoritosContext = createContext();

const FavProvider = ({ children }) => {
    
    const [favoritos, setFavoritos] = useState([])

    return (
        <FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
            {children}
        </FavoritosContext.Provider>
    )
}

export default FavProvider;