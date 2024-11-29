import Layout from 'layout/Main';
import {FC} from 'react';

import './index.css';

// interface IProps {
//   // remotes: IFederatedItem[];
// }

const AppContainer: FC = () => (
  <>
    <Layout />

    <div>
      <div>Name: mf-root</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Tailwind</div>
    </div>
  </>
)

export const App = AppContainer;
