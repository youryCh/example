import {Modal, ModalProps} from 'antd';
import {FC} from 'react';

import {MODAL_TYPE} from '@/constants/typography';
import {getFormattedModalText} from '@/shared/utils';

/**
 * Cancel edit project modal.
 */
export const CancelEditProjectModal: FC<ModalProps> = (props) => (
  <Modal {...MODAL_TYPE.project.cancelEditing} {...props}>
    {getFormattedModalText(MODAL_TYPE.cancelText)}
  </Modal>
);
