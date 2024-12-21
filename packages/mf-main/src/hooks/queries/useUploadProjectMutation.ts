import {EQueryKeys} from '@/enums/queries';
import {createMutationHook} from '@/hooks/helpers/createMutationHook';
import {IEmptyResponseDto} from '@/types/api';

/**
 * JSON project file upload hook.
 */
export const useUploadProjectMutation = createMutationHook<FormData, IEmptyResponseDto>({
  mutationFn: (req) => Promise.resolve(() => req),
  keys: [EQueryKeys.PROJECTS]
});
