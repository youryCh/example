import ErrorPage from 'layout/ErrorPage';
import {FC, useEffect, useState} from 'react';

import {filterRemotes} from './utils';

/**
 * @prop {IFederatedItems[]} remotes Список приложений.
 */
interface IProps {
  remotes: IFederatedItem[];
}

/**
 * Хок инициализации и подключения сервисов.
 */
export const withIntegrationsInit = (AppComponent: FC<IProps>) => () => {
  const [error, setError] = useState<Error>();
  const [isDone, setIsDone] = useState(false);
  const [remotes, setRemotes] = useState<IFederatedItem[]>([]);

  useEffect(() => {
    try {
      setRemotes(filterRemotes());
      console.log('init');
    } catch (e) {
      setError(e);
    } finally {
      setIsDone(true);
    }
  }, []);

  if (error) return <ErrorPage description={error.message} />;
  if (isDone) return <AppComponent remotes={remotes} />;

  return null;
};
