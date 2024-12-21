import {FC, PropsWithChildren, useCallback, useMemo, useState} from 'react';

import {DEFAULT_APP_CONTEXT} from '@/constants/context';
import {AppContext} from '@/context/appContext/AppContext';
import {IAppContext} from '@/types/context';

/**
 * Common application context provider.
 */
export const AppContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [contextState, setContextState] = useState<IAppContext>(DEFAULT_APP_CONTEXT);

  const updateContextState = (newState: Partial<IAppContext>) => {
    setContextState((prev) => ({
      ...prev,
      ...newState
    }))
  };

  const setIdHandler = useCallback((id: number) => {
    updateContextState({id});
  }, []);

  const contextValue = useMemo(() => ({
    ...contextState,
    setId: setIdHandler
  }), [contextState, setIdHandler]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
