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
      <Layout>
        <NotFoundPage />
      </Layout>
    </BrowserRouter>
  );
});

export default Standalone;
