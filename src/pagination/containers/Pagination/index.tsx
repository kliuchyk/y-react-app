import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'antd';

import {
  selectTotalItems,
  selectPageSize,
  selectCurrentPage,
} from '../../selectors';
import { setCurrentPage, setPageSize } from '../../actions';

interface FilterProps {
  isEditable?: boolean;
}

export default function PaginationContainer({ isEditable = false }: FilterProps) {
  const totalItems = useSelector(selectTotalItems);
  const pageSize = useSelector(selectPageSize);
  const currentPage = useSelector(selectCurrentPage);

  const dispatch = useDispatch();

  const handlePageChange = (page: number) => {
    if (page === currentPage) return;
    dispatch(setCurrentPage(page, isEditable));
  };

  const handlePageSizeChange = (current: number, size: number) => {
    if (pageSize === size) return;
    dispatch(setPageSize(size));
  };

  return (
    <div className="container">
      <Pagination
        defaultCurrent={1}
        current={currentPage}
        total={totalItems}
        pageSize={pageSize}
        onChange={handlePageChange}
        pageSizeOptions={['10', '25', '50']}
        onShowSizeChange={handlePageSizeChange}
      />
    </div>
  );
}
