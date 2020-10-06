import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { setOriginsList } from '../origins/actions';

const { REACT_APP_API_BASE: baseURL = '' } = process.env;

export const useGetProductsOrigin = () => {
  const dispatch = useDispatch();

  const getProductsOrigins = useCallback(async () => {
    try {
      const response = await fetch(`${baseURL}/products-origins`);

      if (response.status !== 200) {
        throw new Error('Error while origins request');
      }

      const data = await response.json();
      dispatch(setOriginsList(data.items));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  return { getProductsOrigins };
};
