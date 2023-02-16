import React from 'react'
import './App.css'
import CountryCard from './components/countryCard/CountryCard'
import FilterDropdown from './components/filterDropdown/FilterDropdown'
import NavBar from './components/navBar/NavBar'
import SearchBar from './components/searchBar/SearchBar'
import { useSelector } from 'react-redux'
import { selectCountry, selectFilteredCountry } from './features/countrySlice'
import { selectRegion } from './features/filterSlice'
import FullScreenCard from './components/fullScreenCard/FullScreenCard'

const App = () => {
  const filteredCountries = useSelector(selectFilteredCountry)
  const countries = useSelector(selectCountry)
  const regionFilter = useSelector(selectRegion)
  return (
    <main>
      <NavBar />
      <section className="flexRow searchAndFilter">
        <SearchBar />
        <FilterDropdown />
      </section>
      <CountryCard
        filteredCountries={filteredCountries}
        allCountries={countries}
        regionFilter={regionFilter}
      />
      {/* <FullScreenCard /> */}
    </main>
  )
}

export default App
