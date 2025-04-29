import { configureStore } from '@reduxjs/toolkit';
import reducers from '../reducers';

export const store = configureStore({
  reducer: reducers,
  devTools: __DEV__,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [],
    },
  }),
});