import compose from 'compose-function';
import {FC} from 'react';
import {Route, Routes} from 'react-router-dom';

import {PATHS} from '@/constants/routes';
import {withRouter} from '@/hocs';
import {IBaseAppProps} from '@/types/common';

/**
 * Project base routing component.
 */
export const Project: FC<IBaseAppProps> = compose(
  withRouter
)(() => (
  <Routes>
    <Route path={PATHS.root} element={<p>Project</p>} />
  </Routes>
));
