export const getPersonajes = async (page) => {

	const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

	try {
		const response = await fetch(url);
		const data = await response.json();

        if (response.status === 200) {
            return data.results;
        } else if (response.status === 404) {
			throw new Error('No se encontró el personaje');
        }
        
	} catch {
        console.warn('Algo salió mal');
	}
};