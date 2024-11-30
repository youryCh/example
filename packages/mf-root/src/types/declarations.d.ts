// Federated modules type declarations
/// <reference types="react" />

declare module 'layout/Main' {
  const Layout: React.ComponentType<
    React.PropsWithChildren<{
      navigation: {
        title: string;
        path: string;
        icon: string;
      }[];
    }>
  >;

  export default Layout;
}

declare module 'layout/NotFoundPage' {
  const NotFoundPage: React.ComponentType<React.PropsWithChildren>;

  export default NotFoundPage;
}

declare module 'layout/ErrorPage' {
  const ErrorPage: React.ComponentType<{
    status?: string;
    description?: string;
  }>;

  export default ErrorPage;
}
