import {ArgsProps} from 'antd/es/notification';

/**
 * Common app context model.
 *
 * @prop {number | null} id ID.
 * @prop {(id: number) => void} setId ID setter.
 */
export interface IAppContext {
  id: number | null;
  setId: (id: number) => void;
}

/**
 * Notification api model.
 *
 * @prop {(args: ArgsProps) => void} error Error toast.
 * @prop {(args: ArgsProps) => void} success Success toast.
 */
interface INotificationApi {
  error: (args: ArgsProps) => void;
  success: (args: ArgsProps) => void;
}

/**
 * Global notification context model.
 *
 * @prop {INotificationApi} notificationApi Notification methods.
 */
export interface INotificationContext {
  notificationApi: INotificationApi;
}
