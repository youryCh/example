import {IconDownload} from '@tabler/icons-react';
import {Button, ButtonProps} from 'antd';
import {FC} from 'react';

import {ICON_SIZE} from '@/constants/common';
import {BUTTON_TEXT} from '@/constants/typography';

/**
 * Download button.
 */
export const DownloadButton: FC<ButtonProps> = (props) => (
  <Button
    icon={<IconDownload size={ICON_SIZE.md} />}
    iconPosition="start"
    {...props}
  >
    {BUTTON_TEXT.downloadText}
  </Button>
);
