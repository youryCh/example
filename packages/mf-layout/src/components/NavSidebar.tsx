import {icons} from '@tabler/icons-react';
import {Layout, Menu} from 'antd';
import {ComponentProps, FC, useMemo, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import logo from '@/assets/images/logo.png';

/**
 * @prop {TNavigation} navigation  Список айтемов меню.
 */
interface IProps {
  navigation: TNavigation;
}

const {Sider} = Layout;

/**
 * Боковая навигационная панель.
 */
export const NavSidebar: FC<IProps> = ({navigation}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigate = useNavigate();

  const items = useMemo(() => {
    const onClick = (path: string) => () => navigate(path);

    const mapper = (list: INavItem[], basePath?: string): ComponentProps<typeof Menu>['items'] =>
      list.map((item) => {
        const Icon = item.icon && icons[item.icon as keyof typeof icons];
        const path = `${basePath || ''}${item.path}`;

        return {
          key: `${path}-${item.title}`,
          icon: Icon && <Icon size={16} />,
          label: item.title,
          ...(item.list && {children: mapper(item.list, path)}),
          ...(!item.list && {onClick: onClick(path)})
        };
      });

    return mapper(navigation);
  }, [navigate, navigation]);

  return (
    <Sider
      collapsible
      collapsed={isCollapsed}
      onCollapse={setIsCollapsed}
      width={230}
    >
      <div tw="flex items-center">
        <img
          tw="h-14 ml-3"
          src={logo}
          alt="logo"
        />
      </div>

      <Menu
        items={items}
        mode="inline"
        theme="dark"
      />
    </Sider>
  );
};
