import pathCreator from '../../utils/pathCreator';

const RoutePaths = {
  _: pathCreator('/'),
  Basket: {
    _: pathCreator('/basket'),
  },
  Products: {
    _: pathCreator('/products'),
    ById: {
      _: pathCreator<{ productId: string }>('/products/:productId'),
    },
  },
};

export default RoutePaths;
