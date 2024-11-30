import {FC} from 'react';

interface IProps {
  description?: string;
  status?: string;
}

export const ErrorPage: FC<IProps> = ({description, status}) => (
  <div>
    <p>Error</p>
    <p>{description}</p>
    <p>{status}</p>

    <button onClick={() => window.location.reload()}>
      Reload
    </button>
  </div>
);
