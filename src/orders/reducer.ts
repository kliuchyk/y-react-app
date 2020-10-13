import { ORDERS_ACTION_TYPES } from './actionTypes';

export interface OrderItem {
  productId: string;
  count: number;
};

export interface OrderItems {
  pieces: OrderItem[];
};

export interface OrdersState {
  loading: boolean,
  ordersList: [],
  error: null | string;
}

const initialState: any = {
  loading: false,
  ordersList: [],
  error: null,
}

export const ordersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ORDERS_ACTION_TYPES.GET_ORDERS_REQUEST:
    case ORDERS_ACTION_TYPES.CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
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
    default: {
      return state;
    }
  }
}