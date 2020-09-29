import { normalize } from '../utils/normalize';

const { REACT_APP_API_BASE: baseURL = '' } = process.env;

export interface RequestProductsProps {
  origins: [] | string[];
  price: [] | number[];
  // page?: number;
  // perPage?: number;
}

export const getProducts = async (props: RequestProductsProps) => {
  const { origins, price } = props;
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
  const productsToSave = normalize(data.items);

  return {
    products: productsToSave,
    page: data.page,
    perPage: data.perPage,
    totalItems: data.totalItems,
  };
};

export const getProductById = async (id: string) => {
  const response = await fetch(`${baseURL}/products/${id}`);
  const data = await response.json();

  return data;
};
