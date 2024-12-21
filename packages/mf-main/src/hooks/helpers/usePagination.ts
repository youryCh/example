import {useMemo} from 'react';

import {IAbstractPageRequestDto, IPageDto} from '@/types/api';
import {IPagination} from '@/types/common';

/**
 * Pagination data hook.
 *
 * @param {Partial<IAbstractPageRequestDto>} [request] Request params.
 * @param {IPageDto<unknown>} [response] Response params.
 */
export const usePagination = (request?: Partial<IAbstractPageRequestDto>, response?: IPageDto<unknown>): IPagination =>
  useMemo(
    () => ({
      hasNextPage: response?.hasNextPage || false,
      page: request?.pageable?.page || 0,
      size: request?.pageable?.size || 10,
      totalCount: response?.totalCount || 0
    }),
    [response, request]
  );
