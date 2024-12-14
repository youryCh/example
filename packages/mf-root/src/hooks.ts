import {ComponentType, lazy, LazyExoticComponent, useEffect, useState} from 'react';

import {takeRemoteComponent} from './utils';

const urlCache = new Set<string>();
const componentCache = new Map<string, LazyExoticComponent<ComponentType>>();

/**
 * Хук динамически добавляет скрипты в html.
 *
 * @param {string} url
 */
const useDynamicScript = (url: string) => {
  const [ready, setReady] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);

  useEffect(() => {
    if (!url) return;

    if (urlCache.has(url)) {
      setReady(true);
      setErrorLoading(false);

      return;
    }

    setReady(false);
    setErrorLoading(false);

    const element = Object.assign(document.createElement('script'), {
      src: url,
      type: 'text/javascript',
      async: true,
      onload() {
        urlCache.add(url);
        setReady(true);
      },
      onerror() {
        setReady(false);
        setErrorLoading(true);
      }
    });

    document.head.appendChild(element);

    return () => {
      urlCache.delete(url);
      document.head.removeChild(element);
    };
  }, [url]);

  return {errorLoading, ready};
};

/**
 * Хук динамически забирает mf компоненты из window.
 *
 * @param {string} remoteUrl
 * @param {string} scope
 * @param {string} module
 */
export const useFederatedComponent = (remoteUrl: string, scope: string, module: string) => {
  const key = `${remoteUrl}-${scope}-${module}`;

  const [Component, setComponent] = useState<ComponentType<IBaseMFProps>>(null);

  const {errorLoading, ready} = useDynamicScript(remoteUrl);

  useEffect(() => {
    if (Component) setComponent(null);
  // eslint-disable-next-line
  }, [key]);

  useEffect(() => {
    if (ready && !Component) {
      const Comp = lazy(takeRemoteComponent(scope, module));

      componentCache.set(key, Comp);
      setComponent(Comp);
    }
  // eslint-disable-next-line
  }, [Component, ready, key]);

  return {errorLoading, Component};
};
