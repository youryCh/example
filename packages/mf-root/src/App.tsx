import Layout from 'layout/Main';
import {FC} from 'react';
import {BrowserRouter} from 'react-router-dom';

import {RootRoutes} from '@/components/RootRoutes';
import {withIntegrationsInit} from '@/hocs/with-integrations-init';

import './index.css';

/**
 * @prop {IFederatedItems[]} remotes Список приложений.
 */
interface IProps {
  remotes: IFederatedItem[];
}

const AppContainer: FC<IProps> = ({remotes}) => (
  <BrowserRouter basename="/">
    <Layout
      navigation={remotes.map((remote) => ({
        icon: remote.icon,
        path: remote.route,
        title: remote.description,
        list: remote.subItems?.map((subItem) => ({
          path: subItem.route,
          title: subItem.description,
          icon: subItem.icon
        }))
      }))}
    >
      <RootRoutes remotes={remotes} />
    </Layout>
  </BrowserRouter>
)

export const App = withIntegrationsInit(AppContainer);
