import { configureStore } from "@reduxjs/toolkit";
import timersReducer, { update } from '../features/timers/timersSlice';

export const store = configureStore({
	reducer: {
		timers: timersReducer
	},
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  })
})

let lastUpdateTime = Date.now()

setInterval(() => {
  const now = Date.now()
  const deltaTime = now - lastUpdateTime
  lastUpdateTime = now
  store.dispatch(update(deltaTime))
}, 500)