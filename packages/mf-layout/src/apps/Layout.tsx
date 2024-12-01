import {InfoCircleOutlined} from '@ant-design/icons';
import {Layout as AntLayout, Menu, MenuProps} from 'antd';
import {FC, PropsWithChildren, useState} from 'react';

import {PageHeader} from '@/components/PageHeader';

import logo from '../assets/images/logo.png';

// import {NavSidebar} from '@/components/NavSidebar';
// import {PageHeader} from '@/components/PageHeader';

/**
 * @prop {TNavigation} navigation  Список айтемов меню.
 */
interface IProps extends PropsWithChildren {
  navigation: TNavigation;
}

const {Content, Sider} = AntLayout;

type MenuItem = Required<MenuProps>['items'][number];

// const getItem = (
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[]
// ): MenuItem => ({
//   key,
//   icon,
//   children,
//   label
// } as MenuItem)

// const items: MenuItem[] = [
//   getItem('Option 1', '1', <UserOutlined />),
//   getItem('Option 2', '2', <UserOutlined />),
//   getItem('Option 3', '3', <UserOutlined />),
// ];

/**
 * Основной лойаут приложения.
 */
export const Layout: FC<IProps> = ({children, navigation}) => {
  const [collapsed, setCollapsed] = useState(false);
  console.log(navigation);

  const items: MenuItem[] = navigation.map(({list, path, title}) => ({
    children: list.map((el) => ({
      key: el.path,
      label: el.title,
      route: el.path
    })),
    icon: <InfoCircleOutlined />,
    key: path,
    label: title,
    onClick: (e) => console.log(e)
  }))

  return (
    <AntLayout tw="min-h-[100vh]">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(v) => setCollapsed(v)}
      >
        <div tw="flex items-center">
          <img
            tw="h-14 ml-3"
            src={logo}
            alt="logo"
          />

          {!collapsed && (<span tw="text-white text-xl">Example</span>)}
        </div>

        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode='inline'
          items={items}
        />
      </Sider>

      <AntLayout>
        <PageHeader />

        <Content>
          {children}
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

// export const Layout: FC<IProps> = ({children, navigation}) => (
//   <div tw="flex h-[100vh] gap-6">
//     <NavSidebar navigation={navigation} />

//     <main tw="flex w-full flex-col gap-6 overflow-auto py-2 pr-2">
//       <PageHeader />

//       {children}
//     </main>
//   </div>
// );
