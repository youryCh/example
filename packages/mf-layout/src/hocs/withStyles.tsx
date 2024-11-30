import {Global} from '@emotion/react';
import {FC, Fragment} from 'react';
import {css, GlobalStyles} from 'twin.macro';

import Inter from '@/assets/fonts/Inter.ttf';

export const withStyles = <P extends object>(Component: FC<P>) => (props: P) => (
  <Fragment>
    <GlobalStyles />

    <Global
      styles={css`
        @font-face {
          font-family: 'Inter';
          font-weight: 400;
          font-style: normal;
          font-display: swap;
          src: url('${Inter}') format('truetype');
        }

        html {
          font-family: Inter, sans-serif;
        }

        body {
          background-color: white;
          overflow: hidden;
        }

        ::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }

        ::-webkit-scrollbar-track {
          border-radius: 8px;
          background-color: #d6d6d6;
        }

        ::-webkit-scrollbar-thumb {
          border-radius: 8px;
          background-color: grey;
        }
      `}
    />

    <Component {...props} />
  </Fragment>
);
