import {FC} from 'react';

import {useFederatedComponent} from '@/hooks';

import {ErrorBoundary} from './ErrorBoundary';

type TFederationProps = Pick<IFederatedItem, 'module' | 'scope' | 'url'> & IBaseMFProps;

const FederatedContainer: FC<TFederationProps> = ({baseURL, module, scope, url}) => {
  const {Component} = useFederatedComponent(url, scope, module);

  return Component ? <Component baseURL={baseURL} /> : null;
};

export const FederatedComponent: FC<TFederationProps> = (props) => (
  <ErrorBoundary>
    <FederatedContainer {...props} />
  </ErrorBoundary>
);
