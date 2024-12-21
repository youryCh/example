import {useContext} from 'react';

import {NotificationContext} from '@/context/notificationContext/NotificationContext';

/**
 * Notification context hook.
 */
export const useNotificationContext = () => useContext(NotificationContext);
