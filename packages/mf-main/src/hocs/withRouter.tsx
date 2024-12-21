import {FC} from 'react';
import {BrowserRouter} from 'react-router-dom';

import {PATHS} from '@/constants/routes';
import {IBaseAppProps} from '@/types/common';

type TProps<P> = P & IBaseAppProps;

/**
 * React router setup HOC.
 */
export const withRouter = <P extends object>(Component: FC<TProps<P>>) =>
  (props: TProps<P>) => (
    <BrowserRouter basename={(props.baseURL || PATHS.root).toLowerCase()}>
      <Component {...props} />
    </BrowserRouter>
  );
