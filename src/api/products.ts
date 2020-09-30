import { normalize } from '../utils/normalize';

const { REACT_APP_API_BASE: baseURL = '' } = process.env;

export interface RequestProductsProps {
  origins: [] | string[];
  price: [] | number[];
  page?: number;
  perPage?: number;
}

export const getProducts = async (props: RequestProductsProps) => {
  const { origins, price, page, perPage = 20 } = props;
  let productsApi = `/products?perPage=${perPage}`;

  console.log('FROM API', origins)

  if (origins.length) {
    productsApi += `&origins=${origins.toString()}`;
  }

  if (price.length) {
    const [minPrice, maxPrice] = price;
    productsApi += `&minPrice=${minPrice}&maxPrice=${maxPrice}`;
  }

  if (page && page !== 1) {
    productsApi += `&page=${page}`;
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
