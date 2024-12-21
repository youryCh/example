import compose from 'compose-function';
import {FC} from 'react';
import {Route, Routes} from 'react-router-dom';

import {PATHS} from '@/constants/routes';
import {withNotification, withQueryClient, withRouter, withStyled} from '@/hocs';
import {ProjectsPage} from '@/pages/ProjectsPage';
import {IBaseAppProps} from '@/types/common';

/**
 * Main base routing component.
 */
export const Main: FC<IBaseAppProps> = compose(
  withQueryClient,
  withStyled,
  withRouter,
  withNotification
)(() => (
  <Routes>
    <Route path={PATHS.root} element={<ProjectsPage />} />
  </Routes>
));
