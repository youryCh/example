import {IconEdit, IconTrash, IconDownload, IconDotsVertical} from '@tabler/icons-react';
import {Dropdown, Space, Table} from 'antd';
import {ColumnsType, Key} from 'antd/es/table/interface';
import {FC, Fragment, useCallback, useEffect, useMemo, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {DeleteButton, DownloadButton} from '@/components/buttons';
import {Counter} from '@/components/inputs/Counter';
import {ConfirmDeleteProjectModal, ConfirmDeleteProjectsModal, EditProjectModal} from '@/components/modals';
import {ACTION_COLUMN_WIDTH, DEFAULT_TOOLTIP_PLACEMENT, ICON_SIZE, PROJECT_FILE_NAME} from '@/constants/common';
import {MENU_OPTIONS_TEXT, PROJECTS_COLUMNS, TOAST_MESSAGES} from '@/constants/typography';
import {useNotificationContext} from '@/hooks/context/useNotificationContext';
import {useNavLink} from '@/hooks/helpers/useNavLink';
import {useDeleteProjectMutation, useDownloadProjectMutation} from '@/hooks/queries';
import {IProjectDto} from '@/types/api';
import {TTableData} from '@/types/common';

/**
 * @prop {IProjectDto[]} projects Projects data.
 * @prop {string[]} projectsNames All projects names.
 * @prop {() => void} onSortChange Sorting handler.
 */
interface IProps {
  projects: IProjectDto[];
  projectsNames: string[];
  onSortChange: () => void;
}

const {deleteMenuText, downloadMenuText, editMenuText} = MENU_OPTIONS_TEXT;

/**
 * Таблица сервисов.
 */
export const ProjectsTable: FC<IProps> = ({onSortChange, projects, projectsNames}) => {
  const [selectedRows, setSelectedRows] = useState<IProjectDto[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmDeleteProjectModalOpen, isIsConfirmDeleteProjectModalOpen] = useState(false);
  const [isConfirmDeleteProjectsModalOpen, isIsConfirmDeleteProjectsModalOpen] = useState(false);
  const [isTableFooterVisible, setIsFooterVisible] = useState(false);
  const [currentRow, setCurrentRow] = useState<IProjectDto>();

  const navigate = useNavigate();
  const {getProjectLink} = useNavLink();
  const {mutateAsync: deleteProject} = useDeleteProjectMutation();
  const {mutateAsync: downloadProject} = useDownloadProjectMutation();
  const {notificationApi: {error, success}} = useNotificationContext();

  const selectedRowsCount = selectedRows.length;
  const isSeveralRowsSelected = selectedRowsCount > 1;
  const tableData: TTableData<IProjectDto>[] = useMemo(
    () => projects.map((item, index) => ({...item, key: String(index)})),
    [projects]
  );
  const selectedProjectsIds = useMemo(
    () => selectedRowsCount ? selectedRows.map(({id}) => id) : [currentRow?.id],
    [currentRow, selectedRows, selectedRowsCount]
  );

  const editModalToggle = useCallback(() => {
    setIsEditModalOpen((prev) => !prev);
  }, []);

  const confirmDeleteProjectToggle = useCallback(() => {
    isIsConfirmDeleteProjectModalOpen((prev) => !prev);
  }, []);

  const confirmDeleteProjectsToggle = useCallback(() => {
    isIsConfirmDeleteProjectsModalOpen((prev) => !prev);
  }, []);

  const editClickHandler = useCallback(() => {
    editModalToggle();
  }, [editModalToggle]);

  const clearRowSelection = () => {
    setSelectedRows([]);
    setSelectedRowKeys([]);
  };

  const downloadHandler = useCallback(() => {
    downloadProject(selectedProjectsIds)
      .then((res) => res.blob())
      .then((blob) => {
        const aElement = document.createElement('a');
        const href = URL.createObjectURL(blob);

        aElement.setAttribute('download', PROJECT_FILE_NAME);
        aElement.href = href;
        aElement.setAttribute('target', '_blank');
        aElement.click();
        URL.revokeObjectURL(href);
        clearRowSelection();
      })
      .catch(({message}) => {
        console.log(message);
      });
  }, [downloadProject, selectedProjectsIds]);

  const deleteHandler = useCallback(() => {
    deleteProject(selectedProjectsIds)
      .then(() => {
        if (isSeveralRowsSelected) {
          confirmDeleteProjectsToggle();
          success({message: TOAST_MESSAGES.delete.projects, placement: DEFAULT_TOOLTIP_PLACEMENT});
        } else {
          confirmDeleteProjectToggle();
          success({message: TOAST_MESSAGES.delete.project, placement: DEFAULT_TOOLTIP_PLACEMENT});
        }

        clearRowSelection();
      })
      .catch(({message}) => {
        error({message, placement: DEFAULT_TOOLTIP_PLACEMENT});
      });
  }, [
    confirmDeleteProjectToggle,
    confirmDeleteProjectsToggle,
    deleteProject,
    error,
    isSeveralRowsSelected,
    selectedProjectsIds,
    success
  ]);

  const columns: ColumnsType<IProjectDto> = [
    {
      key: 'project',
      title: PROJECTS_COLUMNS.project,
      dataIndex: 'project'
    },
    {
      key: 'testCaseAmount',
      title: PROJECTS_COLUMNS.testCaseAmount,
      dataIndex: 'testCaseAmount',
      width: 240,
      sorter: true
    },
    {
      key: 'action',
      width: ACTION_COLUMN_WIDTH,
      onCell: () => ({
        onClick: (e) => {
          e.stopPropagation();
        }
      }),
      render: () => (
        <Dropdown
          menu={{
            items: [
              {
                key: 1,
                label: editMenuText,
                icon: <IconEdit size={ICON_SIZE.md} />,
                onClick: editClickHandler
              },
              {
                key: 2,
                label: downloadMenuText,
                icon: <IconDownload size={ICON_SIZE.md} />,
                onClick: downloadHandler
              },
              {
                key: 3,
                label: deleteMenuText,
                icon: <IconTrash size={ICON_SIZE.md} />,
                onClick: confirmDeleteProjectToggle
              }
            ]
          }}
        >
          <IconDotsVertical size={ICON_SIZE.md} />
        </Dropdown>
      )
    }
  ];

  const renderTableFooter = () => (
    <Space tw="flex justify-end">
      <Counter value={selectedRowsCount} />
      <DownloadButton onClick={downloadHandler} />
      <DeleteButton onClick={isSeveralRowsSelected ? confirmDeleteProjectsToggle : confirmDeleteProjectToggle} />
    </Space>
  );

  useEffect(() => {
    setIsFooterVisible(!!selectedRowsCount);
  }, [selectedRows, selectedRowsCount]);

  return (
    <Fragment>
      <Table
        columns={columns}
        dataSource={tableData}
        footer={isTableFooterVisible && renderTableFooter}
        rowSelection={{
          type: 'checkbox',
          selectedRowKeys,
          onChange: (keys, rows) => {
            setSelectedRows(rows);
            setSelectedRowKeys(keys);
          }
        }}
        pagination={false}
        showSorterTooltip={false}
        onRow={(row) => ({
          onClick: () => {
            navigate(getProjectLink(row.project));
          },
          onMouseEnter: () => {
            setCurrentRow(row);
          }
        })}
        onChange={onSortChange}
      />

      <EditProjectModal
        open={isEditModalOpen}
        row={currentRow}
        projectsNames={projectsNames}
        onClose={editModalToggle}
      />

      <ConfirmDeleteProjectModal
        open={isConfirmDeleteProjectModalOpen}
        onCancel={confirmDeleteProjectToggle}
        onOk={deleteHandler}
      />

      <ConfirmDeleteProjectsModal
        open={isConfirmDeleteProjectsModalOpen}
        onCancel={confirmDeleteProjectsToggle}
        onOk={deleteHandler}
      />
    </Fragment>
  );
};
