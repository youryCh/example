import {FC} from 'react';

import './index.css';

type TProps = {};

const AppContainer: FC<TProps> = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: mf-root</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>
)

export const App = AppContainer;
