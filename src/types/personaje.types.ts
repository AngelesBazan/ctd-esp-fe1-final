interface Location {
    name: string;
}

export interface Personaje {
    id: number;
    name: string;
    status: string;
    image: string;
    species: string;
    gender: string;
    episode: string[];
    location: Location;
}

export default Personaje;