declare module 'layout/Main' {
  const Layout: React.ComponentType<
    React.PropsWithChildren<{
      noop?: string;
    }>
  >;

  export default Layout;
}
