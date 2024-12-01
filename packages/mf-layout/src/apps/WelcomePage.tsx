import {DotLottiePlayer} from '@dotlottie/react-player';
import {FC} from 'react';

import Welcome from '@/assets/lottie/Welcome.lottie';

/**
 * Welcome page.
 */
export const WelcomePage: FC = () => (
  <div tw="h-full bg-white">
    <DotLottiePlayer
      src={Welcome}
      autoplay
      loop
    />
  </div>
);
