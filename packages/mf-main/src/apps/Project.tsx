import compose from 'compose-function';
import {FC} from 'react';
import {Route, Routes} from 'react-router-dom';

import {PATHS} from '@/constants/routes';
import {withRouter} from '@/hocs';
import {ElementsPage} from '@/pages/ElementsPage';
import {IBaseAppProps} from '@/types/common';

/**
 * Базовый компонент с основными роутами приложения.
 */
export const Project: FC<IBaseAppProps> = compose(
  withRouter
)(() => (
  <Routes>
    <Route path={PATHS.root} element={<ElementsPage />} />
  </Routes>
));
