import {useParams} from 'react-router-dom';

import {ROOT_LINK} from '@/constants/routes';
import {TRouteParams} from '@/types/common';

/**
 * Handle navigation links hook.
 */
export const useNavLink = () => {
  const {project} = useParams<TRouteParams>();

  return {
    rootLink: ROOT_LINK,
    projectLink: `${ROOT_LINK}${project}`,
    getProjectLink: (projectName: string) => `${ROOT_LINK}/${projectName}`
  };
};
