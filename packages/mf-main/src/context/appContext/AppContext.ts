import {createContext} from 'react';

import {DEFAULT_APP_CONTEXT} from '@/constants/context';
import {IAppContext} from '@/types/context';

/**
 * Common application context.
 */
export const AppContext = createContext<IAppContext>(DEFAULT_APP_CONTEXT);
