import {EQueryKeys} from '@/enums/queries';
import {createMutationHook} from '@/hooks/helpers/createMutationHook';
import {ICreateProjectDto, IEmptyResponseDto} from '@/types/api';

/**
 * Update project hook.
 */
export const useUpdateProjectMutation = createMutationHook<ICreateProjectDto, IEmptyResponseDto>({
  mutationFn: () => {},
  keys: [EQueryKeys.PROJECTS]
});
