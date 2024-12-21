import {projectsMockData} from '@/constants/mocks';
import {EQueryKeys} from '@/enums/queries';
import {createQueryHook} from '@/hooks/helpers/createQueryHook';
import {IGetProjectsRequestDto, IProjectsResponseDto} from '@/types/api';

/**
 * Get projects query.
 */
export const useProjectsQuery = createQueryHook<IGetProjectsRequestDto, IProjectsResponseDto>({
  fetchFn: () => {}, // TODO: add service
  key: EQueryKeys.PROJECTS,
  initialData: projectsMockData
});
