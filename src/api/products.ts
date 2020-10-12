import { NewProduct, EditProduct } from '../products/reducer';
import { normalize } from '../utils/normalize';

const { REACT_APP_API_BASE: baseURL = '', REACT_APP_API_KEY: apiKey } = process.env;

export interface RequestProductsProps {
  origins?: [] | string[];
  price?: [] | number[];
  page?: number;
  perPage?: number;
  isEditable?: boolean;
}

const headers = {
  Authorization: `${apiKey}`,
  'Content-Type': 'application/json',
}

export const getProducts = async (props: RequestProductsProps) => {
  const { origins = [], price = [], page, perPage = 10, isEditable = false } = props;
  let productsApi = `/products?perPage=${perPage}`;

  if (isEditable) {
    productsApi += `&editable=true`
  }

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

  const response = await fetch(`${baseURL}${productsApi}`, { mode: 'cors', headers });
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

export const createNewProduct = async ({ name, price, origin }: NewProduct) => {
  const response = await fetch(`${baseURL}/products`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ product: { name, price, origin } }),
  });

  return await response.json();
};

export const editProduct = async (reqData: EditProduct) => {
  const { id, ...product } = reqData;
  const response = await fetch(`${baseURL}/products/${id}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({ product: { ...product } }),
  });

  return await response.json();
};
