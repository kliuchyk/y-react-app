import { normalize } from '../utils/normalize';

const { REACT_APP_API_BASE: baseURL = '' } = process.env;

export const getProducts = async () => {
  const response = await fetch(`${baseURL}/products`, { mode: 'cors' });
  const data = await response.json();
  const dataToSave = normalize(data.items);

  return dataToSave;
};

export const getProductById = async (id: number) => {
  const response = await fetch(`${baseURL}/products/${id}`);
  const data = await response.json();

  return data;
};
