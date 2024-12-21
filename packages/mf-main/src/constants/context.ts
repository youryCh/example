import {noop} from '@/shared/utils';
import {IAppContext, INotificationContext} from '@/types/context';

export const DEFAULT_APP_CONTEXT: IAppContext = {
  id: null,
  setId: noop,
};

export const DEFAULT_NOTIFICATION_CONTEXT: INotificationContext = {
  notificationApi: {
    success: noop,
    error: noop
  }
};
