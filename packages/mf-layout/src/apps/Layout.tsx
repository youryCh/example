import {Layout as AntLayout} from 'antd';
import {FC, PropsWithChildren} from 'react';

import {NavSidebar} from '@/components/NavSidebar';
import {PageHeader} from '@/components/PageHeader';

/**
 * @prop {TNavigation} navigation  Список айтемов меню.
 */
interface IProps extends PropsWithChildren {
  navigation: TNavigation;
}

const {Content} = AntLayout;

/**
 * Main application layout.
 */
export const Layout: FC<IProps> = ({children, navigation}) => (
  <AntLayout tw="h-[100vh]">
    <NavSidebar navigation={navigation} />

    <AntLayout tw="h-[100vh] overflow-auto">
      <PageHeader />

      <Content>
        {children}
      </Content>
    </AntLayout>
  </AntLayout>
);
