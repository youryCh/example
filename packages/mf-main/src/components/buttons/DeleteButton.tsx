import {IconTrash} from '@tabler/icons-react';
import {Button, ButtonProps} from 'antd';
import {FC} from 'react';

import {BUTTON_TEXT} from '@/constants/typography';

/**
 * Delete button.
 */
export const DeleteButton: FC<ButtonProps> = (props) => (
  <Button
    icon={<IconTrash size={15} />}
    iconPosition="start"
    {...props}
  >
    {BUTTON_TEXT.delete}
  </Button>
);
