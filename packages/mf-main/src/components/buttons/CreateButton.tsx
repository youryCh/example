import {IconPlus} from '@tabler/icons-react';
import {Button, ButtonProps} from 'antd';
import {FC} from 'react';

import {ICON_SIZE} from '@/constants/common';
import {BUTTON_TEXT} from '@/constants/typography';

/**
 * Create button component.
 */
export const CreateButton: FC<ButtonProps> = (props) => (
  <Button
    type="primary"
    icon={<IconPlus size={ICON_SIZE.md} />}
    {...props}
  >
    {props.title || BUTTON_TEXT.createText}
  </Button>
);
 