import 'twin.macro';
import {css as emotionCss} from '@emotion/react';

declare module 'twin.macro' {
  const css: typeof emotionCss;
}
