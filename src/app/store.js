import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../../src/features/filterSlice'
import countryReducer from '../features/countrySlice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    countries: countryReducer,
  },
})
