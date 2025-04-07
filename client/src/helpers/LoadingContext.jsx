// helpers/LoadingContext.jsx
import { createContext, useContext } from 'react';

export const LoadingContext = createContext({
  isLoading: true,
  setIsLoading: () => {}
});

export const useLoadingContext = () => useContext(LoadingContext);