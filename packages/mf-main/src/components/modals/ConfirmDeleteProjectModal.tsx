import {Modal, ModalProps} from 'antd';
import {FC} from 'react';

import {MODAL_TYPE} from '@/constants/typography';
import {getFormattedModalText} from '@/shared/utils';

/**
 * Confirm delete project modal.
 */
export const ConfirmDeleteProjectModal: FC<ModalProps> = (props) => (
  <Modal {...MODAL_TYPE.project.delete} {...props}>
    {getFormattedModalText(MODAL_TYPE.project.deleteProjectText)}
  </Modal>
);
