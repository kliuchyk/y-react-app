import { Product } from '../products/reducer';
import { ORDERS_ACTION_TYPES } from './actionTypes';

export interface OrderItem {
  productId: string;
  count: number;
};

export interface OrderItems {
  pieces: OrderItem[];
};

interface OrderDetailsItem {
  product: Product;
  count: number;
}

export interface OrderDetails {
  id: string,
  pieces: OrderDetailsItem[],
  createdAt: string
}

export interface OrdersState {
  loading: boolean,
  ordersList: [],
  orderDetails: OrderDetails | null,
  error: null | string;
}

const initialState: any = {
  loading: false,
  ordersList: [],
  orderDetails: null,
  error: null,
}

export const ordersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ORDERS_ACTION_TYPES.GET_ORDERS_REQUEST:
    case ORDERS_ACTION_TYPES.CREATE_ORDER_REQUEST:
    case ORDERS_ACTION_TYPES.GET_ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        orderDetails: null,
      }
    case ORDERS_ACTION_TYPES.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case ORDERS_ACTION_TYPES.GET_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        ordersList: action.orders
      }
    case ORDERS_ACTION_TYPES.GET_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        orderDetails: action.payload
      }
    default: {
      return state;
    }
  }
}