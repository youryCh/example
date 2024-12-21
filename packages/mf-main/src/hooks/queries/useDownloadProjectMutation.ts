import {createMutationHook} from '@/hooks/helpers/createMutationHook';

/**
 * Download JSON project file hook.
 */
export const useDownloadProjectMutation = createMutationHook<number[], Response>({
  mutationFn: () => {},
  keys: []
});
