/**
 * Base component props model.
 *
 * @prop {string} baseURL Router base url.
 */
export interface IBaseAppProps {
  baseURL: string;
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
