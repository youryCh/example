import {DotLottiePlayer} from '@dotlottie/react-player';
import {FC} from 'react';

import Animation from '@/assets/lottie/404.lottie';

/**
 * Not found page with lottie animation.
 */
export const NotFoundPage: FC = () => (
  <div tw="flex items-center justify-center h-full">
    <DotLottiePlayer
      tw="w-96"
      src={Animation}
      speed={.7}
      autoplay
      loop
    />
  </div>
);
