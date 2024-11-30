import {FC} from 'react';

/**
 * @prop {IFederatedItems[]} remotes Список приложений.
 */
interface IProps {
  remotes: IFederatedItem[];
}

/**
 * Коневой роутинг приложения.
 */
export const RootRoutes: FC<IProps> = ({remotes}) => (
  <div>
    <p>Root router</p>

    {remotes.map(({description}) => (<p>{description}</p>))}
  </div>
);
