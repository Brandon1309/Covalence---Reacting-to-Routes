import React, { useState, useEffect } from "react"
import { Link, link } from "react-router-dom"
import NavBar from "../components/NavBar"

const People = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("https://ghibliapi.herokuapp.com/people")
      const allPeople = await res.json();
      setPeople(allPeople)
    })()
  }, [])
  return (
    <div className="container">
      <NavBar />
      {people.map(people => (
        <div className="card" key={`people-${people.id}`}>
          <h2 className="card-title m-2 p-2"> {people.name}</h2>
          <p className="card-body p-2"> {people.gender}</p>
          <Link className="btn btn-primary btn-sm w-25 m-2 p-2" to={`/people/${people.id}`}>Details</Link>
        </div>
      ))}

    </div>
  )
}
export default People;