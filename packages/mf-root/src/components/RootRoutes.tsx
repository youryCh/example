import NotFoundPage from 'layout/NotFoundPage';
import WelcomePage from 'layout/WelcomePage';
import {FC, ReactNode, useMemo} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import {FederatedComponent} from './FederatedComponent';

/**
 * @prop {IFederatedItems[]} remotes Список приложений.
 */
interface IProps {
  remotes: IFederatedItem[];
}

/**
 * App root routing.
 */
export const RootRoutes: FC<IProps> = ({remotes}) => {
  const routes = useMemo(() => {
    const getRoutes = (list: IFederatedItem[], basePath?: string): ReactNode[] =>
      list.reduce((acc, cur) => {
        const path = `${basePath || ''}${cur.route}${cur.splat ? '/*' : ''}`;
        const baseUrl = `${basePath || ''}${cur.route}`;

        return cur?.subItems
          ?
            [
              ...acc,
              ...getRoutes(cur.subItems, cur.route)
            ]
          :
            [
              ...acc,
              <Route
                key={cur.route}
                path={path}
                element={
                  <FederatedComponent
                    baseURL={baseUrl}
                    module={cur.module}
                    scope={cur.scope}
                    url={cur.url}
                  />
                }
              />
            ];
      }, []);

    return getRoutes(remotes);
  }, [remotes]);

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/404" element={<NotFoundPage />} />
      {routes}
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};
