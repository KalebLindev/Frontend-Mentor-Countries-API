import './fullScreenCard.css'

const FullScreenCard = (props) => {
  return (
    <section>
      <div>
        <img src={props.country.flag} alt="countries flag" />
      </div>
      <div>
        <h2>{props.country.name}</h2>
        <p>{props.country.nativeName}</p>
        <p>{props.country.population}</p>
        <p>{props.country.region}</p>
        <p>{props.country.subRegion}</p>
        <p>{props.country.capital}</p>
        <p>{props.country.topLevelDomain}</p>
        <p>{props.country.currencies}</p>
        <p>{props.country.languages}</p>
        <p>{props.country.borderCountries}</p>
      </div>
    </section>
  )
}

export default FullScreenCard
