import {FC, PropsWithChildren} from 'react';

import {NavSidebar} from '@/components/NavSidebar';
import {PageHeader} from '@/components/PageHeader';

/**
 * @prop {TNavigation} navigation  Список айтемов меню.
 */
interface IProps extends PropsWithChildren {
  navigation: TNavigation;
}

/**
 * Основной лойаут приложения.
 */
export const Layout: FC<IProps> = ({children, navigation}) => (
  <div tw="flex h-[100vh] gap-6">
    <NavSidebar navigation={navigation} />

    <main tw="flex w-full flex-col gap-6 overflow-auto py-2 pr-2">
      <PageHeader />

      {children}
    </main>
  </div>
);
