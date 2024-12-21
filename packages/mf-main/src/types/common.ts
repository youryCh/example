/**
 * Base component props model.
 *
 * @prop {string} baseURL Router base url.
 */
export interface IBaseAppProps {
  baseURL: string;
}

/**
 * Sort setting model.
 *
 * @prop {string | string[]} sortPropertyName Sorting parameters.
 * @prop {boolean} sortDirectionAsc Ascend flag.
 */
interface ISort {
  sortPropertyName: string | string[];
  sortDirectionAsc: boolean;
}

/**
 * Pagination settings model.
 *
 * @prop {boolean} hasNextPage Next page flag.
 * @prop {number} page Current page.
 * @prop {number} size Items per page.
 * @prop {number} totalCount Total pages count.
 * @prop {ISort} [sort] Sort params.
 */
export interface IPagination {
  hasNextPage: boolean;
  page: number;
  size: number;
  totalCount: number;
  sort?: ISort;
}

/**
 * Filter model.
 *
 * @prop {Partial<T>} filter Filter settings.
 */
export interface IFilter<T> {
  filter: Partial<T>;
}

/**
 * Query params model.
 *
 * @prop {string} project Project.
 */
interface IParams {
  project: string;
}

/**
 * UseParams hook model.
 */
export type TRouteParams = {[K in keyof IParams]: string};

/**
 * Extended ant-design table data model.
 *
 * @prop {string} key Key.
 */
export type TTableData<T extends object> = T & {
  key: string;
};

/**
 * Project RHF model.
 *
 * @prop {string} project Project.
 */
export interface IProjectForm {
  project: string;
}
