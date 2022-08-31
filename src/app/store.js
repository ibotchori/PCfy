import { configureStore } from '@reduxjs/toolkit'
import { employeeInfoReducer, laptopInfoReducer } from 'features'

export const store = configureStore({
  reducer: {
    employeeInfo: employeeInfoReducer,
    laptopInfo: laptopInfoReducer,
  },
})
