import {FC, useEffect, useState} from 'react';

import {Main} from '@/apps/Main';
import {PATHS} from '@/constants/routes';

/**
 * Standalone app.
 */
const Standalone: FC = () => {
  const [isDone, setIsDone] = useState<boolean>();

  useEffect(() => {
    // TODO: init service
    setIsDone(true);
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    return <p>This app isn&rsquo;t working in standalone mode</p>;
  }

  return isDone ? <Main baseUrl={PATHS.root} /> : null;
};

export default Standalone;
