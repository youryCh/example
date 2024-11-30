import {BrowserRouter} from 'react-router-dom';

import {Layout} from '@/apps/Layout';
import {NotFoundPage} from '@/apps/NotFoundPage';
import {withStyles} from '@/hocs/withStyles';

const Standalone = withStyles(() => {
  if (process.env.NODE_ENV !== 'development') {
    return <p>This app isn&rsquo;t working in standalone mode</p>;
  }

  return (
    <BrowserRouter basename="/">
      <Layout
        navigation={[
          {
             icon: 'Info',
             path: '/page',
             title: 'Layout',
             list: [
              {path: '/sub-menu-1', title: 'SubMenu1'},
              {path: '/sub-menu-2', title: 'SubMenu2'}
             ]
          }
        ]}
      >
        <NotFoundPage />
      </Layout>
    </BrowserRouter>
  );
});

export default Standalone;
