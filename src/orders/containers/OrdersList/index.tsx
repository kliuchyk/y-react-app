import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'antd';

import { selectOrdersList } from '../../selectors';

interface OrderListItem {
  key: string;
  createdAt: string;
  id: string;
  number: number;
}

export default function OrdersList() {
  const ordersList = useSelector(selectOrdersList);

  const columns = [
    {
      title: '#',
      dataIndex: 'number',
      key: 'number',
      render: (id: string) => <>{id}</>,
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string, orderItem: OrderListItem) => (
        <Link to={`/orders/${orderItem.id}`}>{date}</Link>
      ),
    },
  ];

  const data: OrderListItem[] = ordersList.map((order, idx) => {
    const listItem = {
      id: order.id,
      key: order.id,
      number: idx + 1,
      createdAt: order.createdAt,
    };

    return listItem;
  });

  return <Table columns={columns} dataSource={data} />;
}
