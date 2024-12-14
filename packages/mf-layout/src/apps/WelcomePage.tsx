import {DotLottiePlayer} from '@dotlottie/react-player';
import {FC} from 'react';

import Welcome from '@/assets/lottie/Welcome.lottie';

/**
 * Welcome page.
 */
export const WelcomePage: FC = () => (
  <div tw="h-full flex items-center justify-center bg-white">
    <DotLottiePlayer
      tw="max-w-[800px]"
      src={Welcome}
      autoplay
      loop
    />
  </div>
);
