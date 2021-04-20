import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar";
const FilmDetails = () => {
  const { filmid } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
      .then(res => res.json())
      .then(film => setFilm(film))
  }, [])
  return (
    <main>
      <NavBar />
      <section>
        <div>
          <h1>{film?.title}</h1>
          <p>{film?.description}</p>
        </div>
      </section>
    </main>
  )

}
export default FilmDetails