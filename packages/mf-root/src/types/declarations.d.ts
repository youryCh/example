// Federated modules type declarations

declare module 'layout/Main' {
  const Layout: React.ComponentType<
    React.PropsWithChildren<{
      noop?: string;
    }>
  >;

  export default Layout;
}

declare module 'layout/NotFoundPage' {
  const NotFoundPage: React.ComponentType<React.PropsWithChildren>;

  export default NotFoundPage;
}

declare module 'layout/ErrorPage' {
  const ErrorPage: React.ComponentType;

  export default ErrorPage;
}
