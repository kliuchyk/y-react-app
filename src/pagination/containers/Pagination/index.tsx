import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'antd';

import { selectTotalItems, selectPageSize } from '../../selectors';

export default function PaginationContainer() {
  const totalItems = useSelector(selectTotalItems);
  const pageSize = useSelector(selectPageSize);
  const dispatch = useDispatch();

  const handlePageChange = (page: number) => {
    console.log(page);
  };

  return (
    <div className="container">
      <Pagination
        defaultCurrent={1}
        total={totalItems}
        defaultPageSize={pageSize}
        onChange={handlePageChange}
      />
    </div>
  );
}
