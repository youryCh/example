import {useMutation, useQueryClient} from '@tanstack/react-query';

import {EQueryKeys} from '@/enums/queries';

/**
 * @prop {EQueryKeys[]} keys Query keys.
 * @prop {(request: Req) => Promise<Resp>} mutationFn Mutation request.
 */
interface ICreateMutationHook<Req, Resp> {
  keys: EQueryKeys[];
  mutationFn: (request: Req) => Promise<Resp>;
}

/**
 * Mutations factory.
 */
export const createMutationHook = <Req, Resp>({keys, mutationFn}: ICreateMutationHook<Req, Resp>) => () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      keys.forEach((key) => {
        queryClient.invalidateQueries({queryKey: [key]});
      });
    }
  });

  return mutation;
};
