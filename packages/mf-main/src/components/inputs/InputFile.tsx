import {ChangeEvent, forwardRef} from 'react';

import {uploadFileTypeMap} from '@/constants/common';
import {EFileType} from '@/enums/common';

/**
 * @prop {EFileType} uploadFileType Upload file type.
 * @prop {(event: ChangeEvent<HTMLInputElement>) => void} uploadHandler Upload handler.
 */
interface IProps {
  uploadFileType: EFileType;
  uploadHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Invisible input for file uploading.
 */
export const InputFile = forwardRef<HTMLInputElement, IProps>(({uploadFileType, uploadHandler}, ref) => (
  <input
    ref={ref}
    type="file"
    accept={uploadFileTypeMap.get(uploadFileType)}
    hidden
    onChange={uploadHandler}
  />
));
