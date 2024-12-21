export const EMPTY_CHAR = '';
export const SPACE_CHAR = ' ';
export const SEARCH_PLACEHOLDER = 'Project name';

export const VALIDATION_ERRORS = {
  languageError: 'Only english language',
  sameProjectName: 'Project already exists'
};

export const TOAST_MESSAGES = {
  delete: {
    project: 'Project deleted!',
    projects: 'Projects deleted!'
  },
  add: {
    project: 'New project created!'
  },
  edit: {
    project: 'Project updated!'
  },
  error: {
    upload: 'File upload error!'
  },
  upload: 'File uploaded!'
};

export const MENU_OPTIONS_TEXT = {
  editMenuText: 'Edit',
  deleteMenuText: 'Delete',
  downloadMenuText: 'Download'
};

export const BUTTON_TEXT = {
  searchText: 'Search',
  createText: 'Create',
  uploadText: 'Upload',
  downloadText: 'Download',
  delete: 'Delete',
  newProject: 'New Project',
  upload: 'Upload'
};

export const HEADINGS = {
  newProject: 'New Project'
};

export const PAGINATION_TEXT = {
  itemsPerPage: 'Items on page',
  page: 'Page'
};

export const PROJECTS_COLUMNS = {
  project: 'Name',
  testCaseAmount: 'Test-case amount'
};

export const FORM_TITLES = {
  project: 'Name'
};

const DEFAULT_MODAL_BUTTON_TEXT = {
  okText: 'OK',
  cancelText: 'Cancel'
};

export const MODAL_TYPE = {
  cancelText: [
    'Are you sure?',
    'All unsaved data will be lost!'
  ],
  project: {
    new: {
      title: 'New Project',
      ...DEFAULT_MODAL_BUTTON_TEXT
    },
    cancelCreation: {
      title: 'New Project',
      ...DEFAULT_MODAL_BUTTON_TEXT
    },
    cancelEditing: {
      title: 'Edit Project',
      ...DEFAULT_MODAL_BUTTON_TEXT
    },
    edit: {
      title: 'Edit Project',
      ...DEFAULT_MODAL_BUTTON_TEXT
    },
    delete: {
      title: 'Delete Project',
      ...DEFAULT_MODAL_BUTTON_TEXT
    },
    deleteProjectText: ['Delete Project?'],
    deleteProjectsText: ['Delete Projects?']
  }
};

export const NO_STANDALONE_MESSAGE = 'This app isn&rsquo;t working in standalone mode';
