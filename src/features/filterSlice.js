import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    userSearch: null,
    userRegion: null,
  },
  reducers: {
    search: (state, action) => {
      state.userSearch = action.payload
    },
    filterRegion: (state, action) => {
      state.userRegion = action.payload
    },
  },
})

export const { search, filterRegion } = filterSlice.actions
export const selectFilter = (state) => state.filter.userSearch
export const selectRegion = (state) => state.filter.userRegion
export default filterSlice.reducer
