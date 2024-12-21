import {EFileType} from '@/enums/common';

export const JSON_MIME_TYPE = 'application/json';
export const XML_APP_MIME_TYPE = 'application/xml';
export const DEFAULT_TOOLTIP_PLACEMENT = 'bottomRight';
export const ACTION_COLUMN_WIDTH = 46;
export const PROJECT_FILE_NAME = 'project.json';

export const uploadFileTypeMap = new Map<EFileType, string>([
  [EFileType.JSON, JSON_MIME_TYPE],
  [EFileType.XML, XML_APP_MIME_TYPE]
]);

export const ICON_SIZE = {
  sm: 14,
  md: 16,
  lg: 18
};
