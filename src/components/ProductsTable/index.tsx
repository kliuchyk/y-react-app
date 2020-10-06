import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Space, Button, Input } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';

import {
  selectPickedProductsCount,
  selectCartTotalPrice,
  selectPickedProductsList,
} from '../../cart/selectors';
import {
  deleteFromCart,
  decrementProduct,
  incrementProduct,
  changeProductCount,
} from '../../cart/actions';
import './styles.css';
import { CartProduct } from '../../cart/reducer';

export default function ProductsTable(props: any) {
  const cartProducts = useSelector(selectPickedProductsList);
  const productsCount = useSelector(selectPickedProductsCount);
  const totalPrice = useSelector(selectCartTotalPrice);
  const dispatch = useDispatch();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Origin',
      dataIndex: 'origin',
      key: 'origin',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'count',
      render: (text: string, record: CartProduct) => (
        <Space size="middle">
          <MinusCircleOutlined
            onClick={() => dispatch(decrementProduct(record.productId))}
          />
          <Input
            className="count-input"
            value={record.count}
            onChange={(e) =>
              dispatch(
                changeProductCount(parseInt(e.target.value), record.productId)
              )
            }
          />
          <PlusCircleOutlined
            onClick={() => dispatch(incrementProduct(record.productId))}
          />
        </Space>
      ),
    },
    {
      title: 'Total price for product',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
    },
    {
      title: 'Remove from cart',
      dataIndex: 'delete',
      key: 'delete',
      render: (text: string, record: CartProduct) => (
        <Space size="middle">
          <Button danger onClick={() => dispatch(deleteFromCart(record.productId))}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const TableFooter = ({ totalPrice = 0, totalCount = 0 }) => (
    <div>
      <h3>{`Selected items: ${totalCount}`}</h3>
      <h3>{`Total price: ${totalPrice}`}</h3>
    </div>
  );

  return (
    <Table
      columns={columns}
      dataSource={cartProducts}
      footer={() => (
        <TableFooter totalPrice={totalPrice} totalCount={productsCount} />
      )}
    />
  );
}
