import {notification} from 'antd';
import {FC, PropsWithChildren, useMemo} from 'react';

import {NotificationContext} from './NotificationContext';

/**
 * Global notification context provider.
 */
export const NotificationContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [api, contextHolder] = notification.useNotification();

  const contextValue = useMemo(() => ({notificationApi: {
    error: api.error,
    success: api.success
  }}),
  [api]);

  return (
    <NotificationContext.Provider value={contextValue}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};
