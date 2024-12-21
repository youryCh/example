import {FC, useEffect, useState} from 'react';

import {Main} from '@/apps/Main';
import {PATHS} from '@/constants/routes';
import {NO_STANDALONE_MESSAGE} from '@/constants/typography';

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
    return <p>{NO_STANDALONE_MESSAGE}</p>;
  }

  return isDone && <Main baseURL={PATHS.root} />;
};

export default Standalone;
