import {FC} from 'react';
import {ThemeProvider} from 'styled-components';

/**
 * Styled Components setup HOC.
 */
export const withStyled = <P,>(Component: FC<P>) => (props: P) => (
  <ThemeProvider theme={{}}>
    <Component {...props} />
  </ThemeProvider>
);
