import {useContext} from 'react';

import {AppContext} from '@/context/appContext/AppContext';

/**
 * Common app context hook.
 */
export const useAppContext = () => useContext(AppContext);
