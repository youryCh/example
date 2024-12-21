import {IProjectForm} from './common';

/**
 * Sort item model.
 *
 * @prop {string | string[]} sortPropertyName Sort property name.
 * @prop {boolean} sortDirectionAsc Ascend flag.
 */
interface ISort {
  sortPropertyName: string | string[];
  sortDirectionAsc: boolean;
}

/**
 * Pageable entity model.
 *
 * @prop {number} page Current page.
 * @prop {number} size Items per page.
 * @prop {ISort} [sort] Sort parameters.
 */
export interface IPageable {
  page: number;
  size: number;
  sort?: ISort;
}

/**
 * Common page request model.
 *
 * @prop {IPageable} pageable Pageable settings.
 */
export interface IAbstractPageRequestDto {
  pageable: IPageable;
}

/**
 * Common page model.
 *
 * @prop {boolean} hasNextPage Next page flag.
 * @prop {T[]} items Response items list.
 * @prop {number} totalCount Total items count.
 */
export interface IPageDto<T> {
  hasNextPage: boolean;
  items: T[];
  totalCount: number;
}

/**
 * Project model.
 *
 * @prop {number} id Project ID.
 * @prop {string} project Project name.
 * @prop {number} testCaseAmount Amount of test-cases.
 */
export interface IProjectDto {
  id: number;
  project: string;
  testCaseAmount: number;
}

/**
 * Get projects request model.
 *
 * @prop {IProjectForm} [filter] Filter parameters.
 */
export interface IGetProjectsRequestDto extends Partial<IAbstractPageRequestDto> {
  filter?: IProjectForm;
}

/**
 * Projects response model.
 *
 * @see {@link IProjectDto}
 */
export interface IProjectsResponseDto extends IPageDto<IProjectDto> {}

/**
 * Empty response model.
 */
export interface IEmptyResponseDto {}

/**
 * Create new project model.
 *
 * @prop {string} project Project name.
 * @prop {number} [id] Project ID.
 */
export interface ICreateProjectDto {
  project: string;
  id?: number;
}
