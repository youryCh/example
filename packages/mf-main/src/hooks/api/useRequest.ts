import {useCallback, useState} from 'react';

import {IAbstractPageRequestDto} from '@/types/api';
import {IFilter} from '@/types/common';

/**
 * Request handlers hook.
 *
 * @param {T extends Partial<IAbstractPageRequestDto>} [initial] Initial request data.
 */
export const useRequest = <T extends Partial<IAbstractPageRequestDto>>(initial: T) => {
  const [request, setRequest] = useState<T>(initial);

  const handleFilterChange = useCallback(
    (filter: IFilter<object>) => {
      setRequest({
        ...request,
        pageable: {
          ...request.pageable,
          page: 0
        },
        ...filter
      });
    },
    [request]
  );

  const handlePageChange = useCallback(
    (page: number) => setRequest((prev) => ({
      ...prev,
      pageable: {
        ...prev.pageable,
        page
      }
    })),
    []
  );

  const handleSortChange = useCallback(
    (sortPropertyName: string) => (sortDirectionAsc: boolean) =>
      setRequest((prev) => ({
        ...prev,
        pageable: {
          ...prev.pageable,
          sort: {
            sortDirectionAsc,
            sortPropertyName
          },
        },
      })),
    []
  );

  const handleSizeChange = useCallback(
    (size: number) => setRequest((prev) => ({
      ...prev,
      pageable: {
        ...prev.pageable,
        size
      }
    })),
    []
  );

  return {
    handleFilterChange,
    handlePageChange,
    handleSortChange,
    handleSizeChange,
    request
  };
};
