import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {FC} from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

/**
 * Хок подключения React query.
 */
export const withQueryClient = <P,>(Component: FC<P>) =>
(props: P) => (
  <QueryClientProvider client={queryClient}>
    <Component {...props} />
  </QueryClientProvider>
);
