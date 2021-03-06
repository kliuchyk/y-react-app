import pathCreator from '../../utils/pathCreator';

const RoutePaths = {
  _: pathCreator('/'),
  Cart: {
    _: pathCreator('/cart'),
  },
  Products: {
    _: pathCreator('/products'),
    ById: {
      _: pathCreator<{ productId: string }>('/products/:productId'),
    },
  },
  MyProducts: {
    _: pathCreator('/my-products'),
  },
  Orders: {
    _: pathCreator('/orders'),
    ById: {
      _: pathCreator<{ orderId: string }>('/orders/:orderId'),
    },
  },
};

export default RoutePaths;
