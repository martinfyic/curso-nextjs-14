// https://redux-toolkit.js.org/tutorials/quick-start

import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter/counterSlice';
import pokemonsReducer from './pokemons/pokemonsSlice';
import { localStorageMiddleware } from './middleware/localStorage-middleware';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		pokemons: pokemonsReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(localStorageMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// https://redux-toolkit.js.org/tutorials/typescript
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
