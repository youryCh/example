import {zodResolver} from '@hookform/resolvers/zod';
import {Form, Modal, ModalProps} from 'antd';
import {FC, Fragment, useCallback, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

import {InputField} from '@/components/inputs/InputField';
import {DEFAULT_TOOLTIP_PLACEMENT} from '@/constants/common';
import {EMPTY_CHAR, FORM_TITLES, MODAL_TYPE, TOAST_MESSAGES} from '@/constants/typography';
import {useNotificationContext} from '@/hooks/context/useNotificationContext';
import {useNavLink} from '@/hooks/helpers/useNavLink';
import {useCreateProjectMutation} from '@/hooks/queries/useCreateProjectMutation';
import {getProjectSchema} from '@/shared/schemas';
import {IProjectForm} from '@/types/common';

import {CancelCreateProjectModal} from './CancelCreateProjectModal';

/**
 * @prop {string[]} projects Projects list for uniq validation.
 * @prop {() => void} onClose Close handler.
 */
interface IProps extends ModalProps {
  projects: string[];
  onClose: () => void;
}

/**
 * New project modal.
 */
export const NewProjectModal: FC<IProps> = ({onClose, projects, ...restProps}) => {
  const [isCancelModalOpen, setCancelModalOpen] = useState(false);

  const navigate = useNavigate();
  const {getProjectLink} = useNavLink();
  const {notificationApi: {error, success}} = useNotificationContext();
  const {mutateAsync: createProject} = useCreateProjectMutation();
  const {control, handleSubmit, setValue, watch} = useForm<IProjectForm>({
    resolver: zodResolver(getProjectSchema(projects)),
    mode: 'onChange'
  });

  const inputValue = watch('project');

  const submitHandler = (data: IProjectForm) => {
    createProject(data)
      .then(() => {
        success({message: TOAST_MESSAGES.add.project, placement: DEFAULT_TOOLTIP_PLACEMENT});
        navigate(getProjectLink(data.project));
      })
      .catch(({message}) => {
        error({message, placement: DEFAULT_TOOLTIP_PLACEMENT});
      });
  };

  const cancelModalToggle = useCallback(() => {
    setCancelModalOpen((prev) => !prev);
  }, []);

  const cancelHandler = useCallback(() => {
    onClose();
    cancelModalToggle();
    setValue('project', EMPTY_CHAR);
  }, [cancelModalToggle, setValue, onClose]);

  return (
    <Fragment>
      <Modal
        {...MODAL_TYPE.project.new}
        onOk={handleSubmit(submitHandler)}
        onCancel={inputValue ? cancelModalToggle : onClose}
        {...restProps}
      >
        <Form layout="vertical">
          <InputField
            label={FORM_TITLES.project}
            fieldName="project"
            control={control}
            rules={{required: true}}
          />
        </Form>
      </Modal>

      <CancelCreateProjectModal
        open={isCancelModalOpen}
        onCancel={cancelModalToggle}
        onOk={cancelHandler}
      />
    </Fragment>
  );
};
