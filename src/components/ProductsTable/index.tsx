import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Space, Button, Input } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';

import {
  selectPickedProductsCount,
  selectCartTotalPrice,
} from '../../app/redux/selectors';
import { Product } from '../../products/reducer';
import {
  deleteFromCart,
  decrementProduct,
  incrementProduct,
  changeProductCount,
} from '../../cart/actions';
import './styles.css'

export default function ProductsTable(props: any) {
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
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (text: string, record: Product) => (
        <Space size="middle">
          <MinusCircleOutlined
            onClick={() => dispatch(decrementProduct(record.id))}
          />
          <Input
            className='count-input'
            value={record.amount}
            onChange={(e) =>
              dispatch(changeProductCount(parseInt(e.target.value), record.id))
            }
          />
          <PlusCircleOutlined
            onClick={() => dispatch(incrementProduct(record.id))}
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
      render: (text: string, record: Product) => (
        <Space size="middle">
          <Button danger onClick={() => dispatch(deleteFromCart(record.id))}>
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
      dataSource={props.products}
      footer={() => (
        <TableFooter totalPrice={totalPrice} totalCount={productsCount} />
      )}
    />
  );
}