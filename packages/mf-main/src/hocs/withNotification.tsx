import {FC} from 'react';

import {NotificationContextProvider} from '@/context/notificationContext/NotificationContextProvider';

/**
 * Notification setup HOC.
 */
export const withNotification = <P,>(Component: FC<P>) => (props: P) => (
  <NotificationContextProvider>
    <Component {...props} />
  </NotificationContextProvider>
);
