import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"

const PeopleDetails = () => {
  const { peopleid } = useParams();
  const [people, setPeople] = useState(null);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people/${peopleid}`).then(res => res.json())
      .then(people => setPeople(people))
  }, [])
  return (
    <main>
      <NavBar />
      <section>
        <div>
          <h1>{people?.name}</h1>
          <p>{people?.gender}</p>
        </div>
      </section>
    </main>
  )
}

export default PeopleDetails;