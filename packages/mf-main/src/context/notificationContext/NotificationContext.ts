import {createContext} from 'react';

import {DEFAULT_NOTIFICATION_CONTEXT} from '@/constants/context';
import {INotificationContext} from '@/types/context';

/**
 * Global notification context.
 */
export const NotificationContext = createContext<INotificationContext>(DEFAULT_NOTIFICATION_CONTEXT);
