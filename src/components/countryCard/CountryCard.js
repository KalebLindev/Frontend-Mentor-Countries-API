import React, { useEffect } from 'react'
import './countryCard.css'
import { useDispatch } from 'react-redux'
import { loadCountries } from '../../features/countrySlice'

const CountryCard = (props) => {
  const noDuplicates = []
  const dispatch = useDispatch()
  const apiEndpoint = 'https://restcountries.com/v3.1'
  useEffect(() => {
    const fetchCountriesData = async () => {
      const allCountryNames = await fetch(`${apiEndpoint}/all`)
        .then((res) => res.json())
        .then((jsonResponse) => {
          return jsonResponse.map((data) => data.name.common)
        })
      if (noDuplicates.length !== 0) return
      allCountryNames.forEach((country) => {
        if (noDuplicates.includes(country)) return
        noDuplicates.push(country)
      })

      allCountryNames.forEach((countryName) => {
        if (!countryName) return
        try {
          fetch(`${apiEndpoint}/name/${countryName}`)
            .then((res) => {
              if (!res.ok) return
              return res.json()
            })
            .then((jsonResponse) => {
              if (!jsonResponse) return
              return jsonResponse.map((country) => {
                return dispatch(
                  loadCountries({
                    name: country.name.common,
                    population: country.population,
                    region: country.region,
                    capital: country.capital,
                    flag: country.flags.svg,
                  })
                )
              })
            })
        } catch (err) {
          console.log(err)
        }
      })
    }
    fetchCountriesData()
  }, [])

  const filteredCountries =
    props.filteredCountries.length < 1
      ? props.allCountries
      : props.filteredCountries

  return (
    <section className="cardSection">
      {filteredCountries.map((country) => {
        if (
          country.population < 1000 || !country.capital || props.regionFilter
            ? props.regionFilter !== country.region
            : null
        )
          return
        return (
          <div className="card" key={Math.random() * 9999}>
            <img src={country.flag} alt="Country Flag"></img>
            <div className="textSection">
              <h2>{country.name}</h2>
              <p className="cardKey">
                Population<span>:</span>
                <span>{country.population}</span>
              </p>
              <p className="cardKey">
                Region<span>:</span>
                <span>{country.region}</span>
              </p>
              <p className="cardKey">
                Capital<span>:</span>
                <span>{country.capital}</span>
              </p>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default CountryCard
