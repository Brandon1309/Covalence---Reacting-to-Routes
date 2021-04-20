import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
const SpeciesDetails = () => {
  const { speciesid } = useParams();
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/species/${speciesid}`).then(res => res.json())
      .then(species => setSpecies(species))
  }, [])
  return (
    <main>
      <NavBar />
      <section>
        <div>
          <h1>{species?.name}</h1>
          <p>{species?.classification}</p>
          <p>Eye Colors: {species?.eye_colors}</p>
          <p>Hair Colors: {species?.hair_colors}</p>
        </div>
      </section>
    </main>
  )
}

export default SpeciesDetails;