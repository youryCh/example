import {IProjectsResponseDto} from '@/types/api';

export const projectsMockData: IProjectsResponseDto = {
  hasNextPage: false,
  totalCount: 5,
  items: [
    {
      id: 0,
      project: 'project_1',
      testCaseAmount: 2
    },
    {
      id: 1,
      project: 'project_2',
      testCaseAmount: 5
    },
    {
      id: 2,
      project: 'project_3',
      testCaseAmount: 2
    },
    {
      id: 3,
      project: 'project_4',
      testCaseAmount: 3
    },
    {
      id: 4,
      project: 'project_5',
      testCaseAmount: 0
    }
  ]
};
