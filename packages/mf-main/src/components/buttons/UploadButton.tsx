import {IconUpload} from '@tabler/icons-react';
import {Button, ButtonProps} from 'antd';
import {FC} from 'react';

import {ICON_SIZE} from '@/constants/common';
import {BUTTON_TEXT} from '@/constants/typography';

/**
 * Upload button.
 */
export const UploadButton: FC<ButtonProps> = (props) => (
  <Button
    type="primary"
    icon={<IconUpload size={ICON_SIZE.md} />}
    {...props}
  >
    {props.title || BUTTON_TEXT.uploadText}
  </Button>
);
