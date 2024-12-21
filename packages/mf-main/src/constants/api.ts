import {ESortColumn} from '@/enums/common';

export const DEFAULT_PROJECTS_REQUEST_SETTINGS = {
  pageable: {
    page: 0,
    size: 10,
    sort: {
      sortPropertyName: ESortColumn.TEST_CASE_AMOUNT,
      sortDirectionAsc: false
    }
  }
};
