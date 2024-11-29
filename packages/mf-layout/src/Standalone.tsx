import {FC} from 'react';
import {BrowserRouter} from 'react-router-dom';

import {Layout} from '@/apps/Layout';
import {NotFoundPage} from '@/apps/NotFoundPage';

const Standalone: FC = () => {
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
};

export default Standalone;
