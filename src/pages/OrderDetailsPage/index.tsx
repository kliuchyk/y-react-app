import React from 'react';

import OrderDetails from '../../orders/containers/OrderDetails';

export default function OrderDetailsPage() {
  return (
    <div className="order-details">
      <h1 className="page-title">ORDER DETAILS</h1>
      <OrderDetails />
    </div>
  );
}
