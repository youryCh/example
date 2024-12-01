import {QuestionCircleOutlined, UserOutlined} from '@ant-design/icons';
import {Layout, Space, Button, Tooltip} from 'antd';
import {FC} from 'react';

import {TOOLTIP_TITLES} from '@/constants/typography';

const {faq, user} = TOOLTIP_TITLES;

/**
 * Хедер лойаута.
 */
export const PageHeader: FC = () => (
  <Layout.Header tw="px-4">
    <div tw="flex justify-end">
      <Space>
        <Tooltip title={faq}>
          <Button type="text" icon={<QuestionCircleOutlined tw="text-white" />} />
        </Tooltip>
        <Tooltip title={user}>
          <Button type="text" icon={<UserOutlined tw="text-white" />} />
        </Tooltip>
      </Space>
    </div>
  </Layout.Header>
);
