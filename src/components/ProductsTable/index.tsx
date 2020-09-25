import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'antd';

import {
  selectPickedProductsCount,
  selectCartTotalPrice,
} from '../../app/redux/selectors';

export default function ProductsTable(props: any) {
  const productsCount = useSelector(selectPickedProductsCount);
  const totalPrice = useSelector(selectCartTotalPrice);

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
    },
    {
      title: 'Total price for product',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
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
