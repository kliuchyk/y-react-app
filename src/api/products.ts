import { normalize } from '../utils/normalize';

const { REACT_APP_API_BASE: baseURL = '' } = process.env;

export interface RequestProductsProps {
  origins: [] | string[];
  price: [] | number[];
}

// export const getProducts = async (props: RequestProductsProps) => {
export const getProducts = async ({ origins, price }: RequestProductsProps) => {
  let productsApi = '/products';

  if (origins.length) {
    productsApi += `?origins=${origins.toString()}`;
  }

  if (price.length) {
    const [minPrice, maxPrice] = price;
    const queryChar = origins.length ? '&' : '?';

    productsApi += `${queryChar}minPrice=${minPrice}&maxPrice=${maxPrice}`;
  }

  const response = await fetch(`${baseURL}${productsApi}`, { mode: 'cors' });
  const data = await response.json();
  const dataToSave = normalize(data.items);

  return dataToSave;
};

export const getProductById = async (id: string) => {
  const response = await fetch(`${baseURL}/products/${id}`);
  const data = await response.json();

  return data;
};
