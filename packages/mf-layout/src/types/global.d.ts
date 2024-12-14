declare interface INavItem {
  title: string;
  icon: string;
  path: string;
  list?: INavListItem[];
}

declare type TNavigation = INavItem[];
