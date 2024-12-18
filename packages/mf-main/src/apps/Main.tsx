import compose from 'compose-function';
import {FC} from 'react';
import {Route, Routes} from 'react-router-dom';

import {PATHS} from '@/constants/routes';
import {withQueryClient, withRouter, withStyled} from '@/hocs';
import {ElementsPage} from '@/pages/ElementsPage';
import {IBaseAppProps} from '@/types/common';

/**
 * Базовый компонент с основными роутами приложения.
 */
export const Main: FC<IBaseAppProps> = compose(
  withQueryClient,
  withStyled,
  withRouter
)(() => (
  <Routes>
    <Route path={PATHS.root} element={<ElementsPage />} />
  </Routes>
));
