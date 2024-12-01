import NotFoundPage from 'layout/NotFoundPage';
import WelcomePage from 'layout/WelcomePage';
import {FC} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

/**
 * @prop {IFederatedItems[]} remotes Список приложений.
 */
interface IProps {
  remotes: IFederatedItem[];
}

/**
 * App root routing.
 */
export const RootRoutes: FC<IProps> = ({remotes}) => (
  <Routes>
    <Route path="/" element={<WelcomePage />} />
    <Route path="/404" element={<NotFoundPage />} />
    {/* <Route path="/" element={<Navigate to={remotes[0]?.route || '/404'} replace />} /> */}

    {remotes.reduce((acc, cur) => {
      if (cur.subItems) {
        return [
          ...acc,
          ...cur.subItems.map((subItem) => (
            <Route
              key={subItem.route}
              path={`${cur.route}${subItem.route}${subItem.splat ? '/*' : ''}`}
              element={<p>{subItem.description}</p>}
            />
          ))
        ];
      }

      return [
        acc,
        <Route
          key={cur.route}
          path={`${cur.route}${cur.splat ? '/*' : ''}`}
          element={<p>{cur.description}</p>}
        />
      ];
    }, [])}

    <Route path="*" element={<Navigate to="/404" />} />
  </Routes>
);
