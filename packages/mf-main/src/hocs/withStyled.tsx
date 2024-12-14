import {FC} from 'react';
import {ThemeProvider} from 'styled-components';

/**
 * Хок подключения темы Styled Components.
 */
export const withStyled = <P,>(Component: FC<P>) => (props: P) => (
  <ThemeProvider theme={{}}>
    <Component {...props} />
  </ThemeProvider>
);
