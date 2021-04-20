import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"
const Films = (props) => {
  const [films, setFilms] = useState([])

  useEffect(() => {
    (async () => {
      const res = await fetch("https://ghibliapi.herokuapp.com/films")
      const allFilms = await res.json();
      setFilms(allFilms)
    })()
  }, [])
  return (
    <div className="container">
      <NavBar />
      {films.map(film => (
        <div className="card" key={`film-card${film.id}`}>
          <h2 className="p-2 card-title">{film.title}</h2>
          <p className="p-2 card-text">{film.description}</p>
          <Link className="btn btn-primary btn-sm w-25 m-2" to={`/films/${film.id}`}>Details</Link>
        </div>
      ))}

    </div>
  )
}
export default Films;