import {FC, PropsWithChildren} from 'react';

import {NavSidebar} from '@/components/NavSidebar';
import {PageHeader} from '@/components/PageHeader';

interface IProps extends PropsWithChildren {
  // navigation: TNavigation;
  noop?: string
}

export const Layout: FC<IProps> = ({children, noop}) => (
  <div>
    <NavSidebar />
    {noop}

    <main>
      <PageHeader />

      {children}
    </main>
  </div>
);
