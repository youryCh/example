import {Space, Spin} from 'antd';
import {ChangeEvent, FC, Fragment, useCallback, useRef, useState} from 'react';

import {CreateButton, UploadButton} from '@/components/buttons';
import {InputFile} from '@/components/inputs/InputFile';
import {Search} from '@/components/inputs/Search';
import {NewProjectModal} from '@/components/modals';
import {Pagination} from '@/components/Pagination';
import {ProjectsTable} from '@/components/tables/ProjectsTable';
import {DEFAULT_PROJECTS_REQUEST_SETTINGS} from '@/constants/api';
import {DEFAULT_TOOLTIP_PLACEMENT, JSON_MIME_TYPE} from '@/constants/common';
import {BUTTON_TEXT, EMPTY_CHAR, TOAST_MESSAGES} from '@/constants/typography';
import {EFileType, ESortColumn} from '@/enums/common';
import {useRequest} from '@/hooks/api/useRequest';
import {useNotificationContext} from '@/hooks/context/useNotificationContext';
import {usePagination} from '@/hooks/helpers/usePagination';
import {useProjectsQuery, useUploadProjectMutation} from '@/hooks/queries';
import {IGetProjectsRequestDto} from '@/types/api';

/**
 * Projects page.
 */
export const ProjectsPage: FC = () => {
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);

  const uploadRef = useRef<HTMLInputElement>();
  const {notificationApi: {error, success}} = useNotificationContext();
  const {
    handleFilterChange,
    handlePageChange,
    handleSizeChange,
    handleSortChange,
    request
  } = useRequest<IGetProjectsRequestDto>(DEFAULT_PROJECTS_REQUEST_SETTINGS);
  const {data: projects, isFetching} = useProjectsQuery(request);
  const {data: allProjects} = useProjectsQuery();
  const {mutateAsync: uploadProject} = useUploadProjectMutation();
  const pagination = usePagination(request, projects);

  const allProjectsNames = allProjects?.items?.map(({project}) => project);

  const searchHandler = useCallback((filterValue: string) => {
    handleFilterChange({filter: {project: filterValue}});
  }, [handleFilterChange]);

  const clearHandler = useCallback(() => {
    handleFilterChange({filter: {project: EMPTY_CHAR}});
  }, [handleFilterChange]);

  const newProjectModalToggle = useCallback(() => {
    setIsNewProjectModalOpen((prev) => !prev);
  }, []);

  const sortChangeHandler = useCallback(() => {
    handleSortChange(ESortColumn.TEST_CASE_AMOUNT)(!request.pageable.sort.sortDirectionAsc);
  }, [handleSortChange, request]);

  const uploadClickHandler = () => {
    uploadRef.current.click();
  };

  const uploadProjectHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const [file] = e.target.files ?? [];
    const formData = new FormData();

    if (!file) return;

    formData.append('file', file);

    if (file.type !== JSON_MIME_TYPE) {
      error({message: TOAST_MESSAGES.error.upload, placement: DEFAULT_TOOLTIP_PLACEMENT});

      return;
    }

    uploadProject(formData)
      .then(() => {
        success({message: TOAST_MESSAGES.upload, placement: DEFAULT_TOOLTIP_PLACEMENT});
      })
      .catch(() => {
        error({message: TOAST_MESSAGES.error.upload, placement: DEFAULT_TOOLTIP_PLACEMENT});
      });
  }, [error, success, uploadProject]);

  return (
    <Fragment>
      <Spin spinning={isFetching} fullscreen />

      <div tw="flex justify-between">
        <Search onSearch={searchHandler} onClear={clearHandler} />

        <Space>
          <CreateButton title={BUTTON_TEXT.newProject} onClick={newProjectModalToggle} />
          <UploadButton title={BUTTON_TEXT.upload} onClick={uploadClickHandler} />
        </Space>
      </div>

      {projects && (
        <ProjectsTable
          projects={projects.items}
          projectsNames={allProjectsNames}
          onSortChange={sortChangeHandler}
        />
      )}

      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
        onSizeChange={handleSizeChange}
      />

      <NewProjectModal
        open={isNewProjectModalOpen}
        projects={allProjectsNames}
        onClose={newProjectModalToggle}
      />

      <InputFile
        ref={uploadRef}
        uploadFileType={EFileType.JSON}
        uploadHandler={uploadProjectHandler}
      />
    </Fragment>
  );
};
