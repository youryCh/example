import {EQueryKeys} from '@/enums/queries';
import {createMutationHook} from '@/hooks/helpers/createMutationHook';

/**
 * Create new project hook.
 */
export const useCreateProjectMutation = createMutationHook<unknown, unknown>({
  mutationFn: (req) => Promise.resolve(() => req),
  keys: [EQueryKeys.PROJECTS]
});
