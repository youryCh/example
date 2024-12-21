import {EQueryKeys} from '@/enums/queries';
import {createMutationHook} from '@/hooks/helpers/createMutationHook';
import {IEmptyResponseDto} from '@/types/api';

/**
 * Delete project hook.
 */
export const useDeleteProjectMutation = createMutationHook<number[], IEmptyResponseDto>({
  mutationFn: (req) => Promise.resolve(() => req),
  keys: [EQueryKeys.PROJECTS]
});
