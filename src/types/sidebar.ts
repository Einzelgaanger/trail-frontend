export type SideBar = {
  title: string;
  path: string;
  icon: JSX.Element;
  cName: string;
  iconOpened: JSX.Element;
  iconClosed: JSX.Element;
  subNav: SideBar[];
};
