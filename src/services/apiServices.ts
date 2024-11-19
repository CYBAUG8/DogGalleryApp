import axios from 'axios';

const BASE_URL = 'https://dog.ceo/api';

export const fetchAllBreeds = async (): Promise<Record<string, string[]>> => {
  const response = await axios.get<{ message: Record<string, string[]> }>(`${BASE_URL}/breeds/list/all`);
  return response.data.message;
};

export const fetchBreedImages = async (breed: string): Promise<string[]> => {
  const response = await axios.get<{ message: string[] }>(`${BASE_URL}/breed/${breed}/images`);
  return response.data.message;
};
