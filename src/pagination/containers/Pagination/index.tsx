import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'antd';

import { selectTotalItems, selectPageSize, selectCurrentPage } from '../../selectors';
import { setCurrentPage } from '../../actions';

export default function PaginationContainer() {
  const totalItems = useSelector(selectTotalItems);
  const pageSize = useSelector(selectPageSize);
  const currentPage = useSelector(selectCurrentPage);
  
  const dispatch = useDispatch();

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="container">
      <Pagination
        defaultCurrent={1}
        current={currentPage}
        total={totalItems}
        defaultPageSize={pageSize}
        onChange={handlePageChange}
      />
    </div>
  );
}
