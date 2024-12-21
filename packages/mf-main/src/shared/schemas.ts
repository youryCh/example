import {z} from 'zod';

import {allowEngAndNumRegex} from '@/constants/reges';
import {EMPTY_CHAR, SPACE_CHAR, VALIDATION_ERRORS} from '@/constants/typography';

const {object, string} = z;
const {languageError, sameProjectName} = VALIDATION_ERRORS;

/**
 * Get project validation schema.
 *
 * @prop {string[]} projects Projects list for uniq validation.
 */
export const getProjectSchema = (projects: string[]) => object({
  project: string(
    {
      required_error: EMPTY_CHAR,
      invalid_type_error: EMPTY_CHAR
    }
  )
    .trim()
    .min(1, {message: SPACE_CHAR})
    .regex(allowEngAndNumRegex, languageError)
    .refine((name) => !projects.includes(name), {message: sameProjectName})
});
