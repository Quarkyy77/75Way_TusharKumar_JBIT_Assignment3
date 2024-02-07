import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./slices/Auth";
import { setupListeners } from "@reduxjs/toolkit/query";
import authUser from "./slices/User";

export const store = configureStore({
  reducer: {
    saveUserAndToken: authUser,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
