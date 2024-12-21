import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {FC} from 'react';

/**
 * Default query client settings.
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

/**
 * React query setup HOC.
 */
export const withQueryClient = <P,>(Component: FC<P>) =>
(props: P) => (
  <QueryClientProvider client={queryClient}>
    <Component {...props} />
  </QueryClientProvider>
);
