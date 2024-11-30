import {FC} from 'react';

export const ErrorPage: FC = () => (
  <div>
    <p>Not found</p>

    <button onClick={() => window.location.reload()}>
      Reload
    </button>
  </div>
);
