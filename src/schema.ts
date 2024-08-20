import { buildSchema } from 'graphql';
import axios from 'axios';

export const schema = buildSchema(`
  type Query {
    character(id: ID!): Character
    characters: [Character]
  }

  type Character {
    name: String
    height: String
    mass: String
    hair_color: String
    skin_color: String
    eye_color: String
    birth_year: String
    gender: String
  }
`);

const SWAPI_URL = 'https://swapi.dev/api';

export const root = {
  character: async ({ id }: { id: string }) => {
    const response = await axios.get(`${SWAPI_URL}/people/${id}/`);
    return response.data;
  },
  characters: async () => {
    const response = await axios.get(`${SWAPI_URL}/people/`);
    return response.data.results;
  },
};
