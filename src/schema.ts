import { buildSchema } from 'graphql';
import axios from 'axios';

export const schema = buildSchema(`
  type Query {
    characters: [Character]
    character(id: ID!): Character
    planets: [Planet]
    planet(id: ID!): Planet
    starships: [Starship]
    starship(id: ID!): Starship
  }

  type Character {
    name: String
    mass: String
  }

  type Planet {
    name: String
    diameter: String
  }

  type Starship {
    name: String
    cargo_capacity: String
  }
`);

const SWAPI_URL = 'https://swapi.dev/api';


export const root = {

  characters: async () => {
    const response = await axios.get(`${SWAPI_URL}/people/`);
    return response.data.results.map((character: any) => ({
      name: character.name,
      mass: character.mass,
    }));
  },

  character: async ({ id }: { id: string }) => {
    const response = await axios.get(`${SWAPI_URL}/people/${id}/`);
    return {
      name: response.data.name,
      mass: response.data.mass,
    };
  },

  planets: async () => {
    const response = await axios.get(`${SWAPI_URL}/planets/`);
    return response.data.results.map((planet: any) => ({
      name: planet.name,
      diameter: planet.diameter,
    }));
  },


  planet: async ({ id }: { id: string }) => {
    const response = await axios.get(`${SWAPI_URL}/planets/${id}/`);
    return {
      name: response.data.name,
      diameter: response.data.diameter,
    };
  },

  starships: async () => {
    const response = await axios.get(`${SWAPI_URL}/starships/`);
    return response.data.results.map((starship: any) => ({
      name: starship.name,
      cargo_capacity: starship.cargo_capacity,
    }));
  },

  starship: async ({ id }: { id: string }) => {
    const response = await axios.get(`${SWAPI_URL}/starships/${id}/`);
    return {
      name: response.data.name,
      cargo_capacity: response.data.cargo_capacity,
    };
  },
};
