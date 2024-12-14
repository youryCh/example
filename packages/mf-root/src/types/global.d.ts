/**
 * Модель базовых пропсов микрофронта.
 *
 * @prop {string} baseURL Путь для роутинга внутри микрофронта.
 */
declare interface IBaseMFProps {
  baseURL: string;
}

/**
 * Модель динамического микрофронта второго уровня.
 *
 * @prop {string} module Наименование expose модуля из mf конфига.
 * @prop {string} url Путь до remoteEntry.js.
 * @prop {string} route Путь до роута.
 * @prop {string} scope Наименование из поля name mf конфига.
 * @prop {string} description Наименование приложения в сайдбаре, шапке.
 * @prop {string[]} [forRoles] Список допущенных ролей.
 * @prop {boolean} [splat] Признак собственного роутинга в микрофронте.
 * @prop {string} [icon] Icon from tabler.
 * @prop {IFederatedItem[]} [subItems] Sub items list.
 */
declare interface IFederatedItem {
  module: string;
  url: string;
  route: string;
  scope: string;
  description: string;
  forRoles?: string[];
  splat?: boolean;
  icon?: string;
  subItems?: IFederatedItem[];
}
