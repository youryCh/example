import {FC} from 'react';

/**
 * @prop {TNavigation} navigation  Список айтемов меню.
 */
interface IProps {
  navigation: TNavigation;
}

/**
 * Боковая навигационная панель.
 */
export const NavSidebar: FC<IProps> = ({navigation}) => {
  console.log('NavSidebar');

  return (
    <aside tw="py-2 pl-2">
      <p>Navigation sidebar</p>

      <div tw="flex flex-col flex-nowrap gap-2 pl-3 scrollbar-none">
        {navigation?.map(({list}) => list?.length ? (
          <p>Complex items</p>
        ) : (
          <p>Simple item</p>
        ))}
      </div>
    </aside>
  );
};
