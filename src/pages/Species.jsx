import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"

const Species = () => {
  const [species, setSpecies] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("https://ghibliapi.herokuapp.com/species")
      const allSpecies = await res.json();
      setSpecies(allSpecies)
    })()
  }, [])

  return (
    <div className="container">
      <NavBar />
      {species.map(species => (
        <div className="card m-2" key={`species-${species.id}`}>
          <h2 className="card-title p-2"> {species.name}</h2>
          <p className="card-body p-2">{species.classification}</p>
          <Link className="btn btn-primary btn-sm w-25 m-2" to={`/species/${species.id}`}>Details</Link>
        </div>
      ))}
    </div>
  )
}
export default Species