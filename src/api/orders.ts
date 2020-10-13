import { OrderItems } from '../orders/reducer';

const { REACT_APP_API_BASE: baseURL = '', REACT_APP_API_KEY: apiKey } = process.env;

const headers = {
  Authorization: `${apiKey}`,
  'Content-Type': 'application/json',
};

export const getOrdersList = async () => {
  const response = await fetch(`${baseURL}/orders`, {
    headers,
  });
  const data = await response.json();

  return data;
};

export const createNewOrder = async (orderItems: OrderItems) => {
  const response = await fetch(`${baseURL}/orders`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ order: orderItems }),
  });
  const data = await response.json();
  return data;
};