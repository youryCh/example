import {Modal, ModalProps} from 'antd';
import {FC} from 'react';

import {MODAL_TYPE} from '@/constants/typography';
import {getFormattedModalText} from '@/shared/utils';

/**
 * Cancel new project creation modal.
 */
export const CancelCreateProjectModal: FC<ModalProps> = (props) => (
  <Modal {...MODAL_TYPE.project.cancelCreation} {...props}>
    {getFormattedModalText(MODAL_TYPE.cancelText)}
  </Modal>
);
