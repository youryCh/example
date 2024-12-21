import {UndefinedInitialDataOptions, useQuery} from '@tanstack/react-query';

import {EQueryKeys} from '@/enums/queries';

/**
 * @prop {EQueryKeys} key Query key.
 * @prop {Resp} [initialData] Initial response data.
 * @prop {(request: Req) => Promise<Resp>} fetchFn Request.
 */
interface ICreateQueryHook<Req, Resp> {
  key: EQueryKeys;
  initialData?: Resp;
  fetchFn: (request: Req) => Promise<Resp>;
}

/**
 * Query hooks factory.
 */
export const createQueryHook = <Req, Resp>({fetchFn, initialData, key}: ICreateQueryHook<Req, Resp>) =>
  (request?: Req, options?: Partial<UndefinedInitialDataOptions<Resp, Resp, Resp>>) => {
    const {data, isFetching, refetch} = useQuery({
      queryFn: () => fetchFn(request),
      queryKey: [key, request],
      initialData,
      ...options
    });

    return {data, isFetching, refetch};
  };
