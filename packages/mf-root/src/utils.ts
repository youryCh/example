import {ComponentType} from 'react';

/**
 * Dynamically load MF components (from WMF doc).
 *
 * @param {string} scope App scope.
 * @param {string} module MF module.
 */
export const takeRemoteComponent = (scope: string, module: string) => async (): Promise<{default: ComponentType}> => {
  // @ts-ignore
  await __webpack_init_sharing__('default');

  // @ts-ignore
  const container = window[scope];

  if (!container) throw new Error(`MF app ${scope} isn't found`);

  // @ts-ignore
  await container.init(__webpack_share_scopes__.default);
  const factory = await container.get(module);

  if (!factory) throw new Error(`Module ${module} isn't found in MF app ${scope}`);

  const Module = factory();

  if (typeof Module.default !== 'function') throw new Error('To be used dynamically module should be default exported');

  return Module;
};
