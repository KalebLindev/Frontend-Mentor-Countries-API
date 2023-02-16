import { createSlice } from '@reduxjs/toolkit'

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    filteredCountries: [],
  },
  reducers: {
    loadCountries: (state, action) => {
      // console.log(action.payload)
      //^ Change to 250 once the search is built properly
      if (state.countries.some((each) => each.name === action.payload.name))
        return
      if (state.countries.length > 1000) return
      state.countries.push(action.payload)
    },
    filterBySearch: (state, action) => {
      const filterBy = action.payload
      if (!filterBy) return
      state.filteredCountries = state.countries.filter((country) =>
        country.name.toLowerCase().includes(filterBy)
      )
    },
    allCountries: (state, action) => {
      state.filteredCountries = action.payload
    },
  },
})

export const { loadCountries, filterBySearch, allCountries } =
  countriesSlice.actions
export default countriesSlice.reducer

export const selectCountry = (state) => state.countries.countries
export const selectFilteredCountry = (state) =>
  state.countries.filteredCountries
