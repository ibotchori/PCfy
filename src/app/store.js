import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { employeeInfoReducer, laptopInfoReducer } from 'features'

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
})

export const store = configureStore({
  reducer: {
    employeeInfo: employeeInfoReducer,
    laptopInfo: laptopInfoReducer,
  },
  middleware: customizedMiddleware,
})
