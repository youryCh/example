import {REMOTES_CONFIG} from './constants';

const checkRoles = (forRoles: string[]) => !forRoles?.length || true;

export const filterRemotes = () => REMOTES_CONFIG.reduce((acc, cur) => {
  if (!checkRoles(cur.forRoles)) return acc;

  if (!cur.subItems?.length) return [...acc, cur];

  const filteredSubItems = cur.subItems.filter((item) => checkRoles(item.forRoles));

  if (filteredSubItems.length) return [...acc, {...cur, subItems: filteredSubItems}];

  return acc;
}, []);
