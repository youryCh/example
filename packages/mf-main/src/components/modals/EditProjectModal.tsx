import {zodResolver} from '@hookform/resolvers/zod';
import {Form, Modal, ModalProps} from 'antd';
import {FC, Fragment, useCallback, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';

import {InputField} from '@/components/inputs/InputField';
import {DEFAULT_TOOLTIP_PLACEMENT} from '@/constants/common';
import {FORM_TITLES, MODAL_TYPE, TOAST_MESSAGES} from '@/constants/typography';
import {useNotificationContext} from '@/hooks/context/useNotificationContext';
import {useUpdateProjectMutation} from '@/hooks/queries';
import {getProjectSchema} from '@/shared/schemas';
import {ICreateProjectDto, IProjectDto} from '@/types/api';

import {CancelEditProjectModal} from './CancelEditProjectModal';

/**
 * @prop {IProjectDto} row Selected project row.
 * @prop {string[]} projectsNames Projects names list.
 * @prop {() => void} onClose Close modal handler.
 */
interface IProps extends ModalProps {
  row: IProjectDto;
  projectsNames: string[];
  onClose: () => void;
}

/**
 * Edit project modal.
 */
export const EditProjectModal: FC<IProps> = ({onClose, projectsNames, row, ...restProps}) => {
  const {id, project} = row ?? {};

  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const methods = useForm<ICreateProjectDto>({
    defaultValues: {project},
    resolver: zodResolver(getProjectSchema(projectsNames)),
    mode: 'onChange'
  });
  const {mutateAsync: updateProject} = useUpdateProjectMutation();
  const {notificationApi: {error, success}} = useNotificationContext();

  const inputValue = methods.watch('project');
  const isValueChanged = inputValue !== project;

  const submitHandler = useCallback((data: ICreateProjectDto) => {
    updateProject({project: data.project, id})
      .then(() => {
        success({message: TOAST_MESSAGES.edit.project, placement: DEFAULT_TOOLTIP_PLACEMENT});
        onClose();
      })
      .catch(({message}) => {
        error({message, placement: DEFAULT_TOOLTIP_PLACEMENT});
      });
  }, [error, id, updateProject, onClose, success]);

  const cancelModalToggle = useCallback(() => {
    setIsCancelModalOpen((prev) => !prev);
  }, []);

  const cancelEditingHandler = useCallback(() => {
    onClose();
    cancelModalToggle();
    methods.reset();
  }, [cancelModalToggle, methods, onClose]);

  useEffect(() => {
    methods.setValue('project', project);
  }, [methods, project]);

  return (
    <Fragment>
      <Modal
        {...MODAL_TYPE.project.edit}
        onOk={methods.handleSubmit(submitHandler)}
        onCancel={isValueChanged ? cancelModalToggle : onClose}
        {...restProps}
      >
        <Form layout="vertical">
          <InputField
            label={FORM_TITLES.project}
            fieldName="project"
            control={methods.control}
            rules={{required: true}}
          />
        </Form>
      </Modal>

      <CancelEditProjectModal
        open={isCancelModalOpen}
        onCancel={cancelModalToggle}
        onOk={cancelEditingHandler}
      />
    </Fragment>
  );
};
