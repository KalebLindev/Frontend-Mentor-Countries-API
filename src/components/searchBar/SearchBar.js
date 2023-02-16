import React, { useState, useEffect } from 'react'
import './searchBar.css'
import { search as searchFunc } from '../../features/filterSlice'
import { useDispatch } from 'react-redux'
import { filterBySearch } from '../../features/countrySlice'
import { allCountries } from '../../features/countrySlice'
import { selectCountry } from '../../features/countrySlice'
import { useSelector } from 'react-redux'
const SearchBar = () => {
  const dispatch = useDispatch()
  const [userSearch, setUserSearch] = useState()
  const countries = useSelector(selectCountry)

  //^ onChange of the searchBar, update the userSearch useState
  const setSearchState = (e) => {
    e.preventDefault()
    setUserSearch(document.querySelector('.userSearch').value.toLowerCase())

    //^ Filters out the filterCountries state array upon changing searchBar

    //todo Figure out how to get this to dynamically update the rendered country cards. There has to be some sort of way to make the onChange from the search bar to render the html from scratch.
    filterBySearch(userSearch)
  }

  useEffect(() => {
    //? Guard clause
    if (!userSearch) {
      dispatch(searchFunc(null))
      dispatch(allCountries(countries))
      return
    }

    //^ Dispatch each time the setUserSearch useState is triggered
    dispatch(searchFunc(userSearch))
  }, [userSearch, dispatch])

  useEffect(() => {
    dispatch(filterBySearch(userSearch))
  }, [userSearch, dispatch])

  return (
    <form className="searchContainer" onChange={setSearchState}>
      <input
        type="text"
        placeholder="Search for a country..."
        className="userSearch"
      />
    </form>
  )
}

export default SearchBar
