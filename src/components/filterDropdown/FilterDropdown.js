import React, { useEffect, useState } from 'react'
import './filterDropdown.css'
import { useDispatch } from 'react-redux'
import { filterRegion } from '../../features/filterSlice'

const FilterDropdown = () => {
  const dispatch = useDispatch()
  const [userFilter, setUserFilter] = useState()
  let isModalVisible = false

  //^ Toggle visibility of the dropdown modal
  const showHideModal = () => {
    const filterModal = document.querySelector('.filterOptions')
    filterModal.style.opacity = isModalVisible ? '0' : '1'
    filterModal.style.height = isModalVisible ? '0' : '295px'
    isModalVisible = !isModalVisible
  }

  //^ upon clicking on of the filter dropdown options, set the useState
  const assignFilterRegion = (e) => {
    const filterValue = e.target.innerHTML
    setUserFilter(filterValue)
  }

  useEffect(() => {
    //? Guard clause
    if (!userFilter) return
    if (userFilter === 'No Filter') dispatch(filterRegion(null))
    //^ Dispatch each time the setUserFilter useState is triggered
    else dispatch(filterRegion(userFilter))
  }, [userFilter, dispatch])

  return (
    <section onClick={showHideModal}>
      <div className="filterSection">
        <p className="filterContainer">Filter by region</p>
        <p>⬇️</p>
      </div>
      <div className="filterOptions">
        <p onClick={assignFilterRegion}>No Filter</p>
        <p onClick={assignFilterRegion}>Africa</p>
        <p onClick={assignFilterRegion}>Americas</p>
        <p onClick={assignFilterRegion}>Asia</p>
        <p onClick={assignFilterRegion}>Europe</p>
        <p onClick={assignFilterRegion}>Oceania</p>
      </div>
    </section>
  )
}

export default FilterDropdown
