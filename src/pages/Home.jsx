
import NavBar from "../components/NavBar"

const Home = () => {
  return (
    <div className="container">
      <NavBar />

      <div>
        <div className="card text-center mt-4 ">
          <h3 className="card-title">Welcome!</h3>
          <p className="card-body">Welcome to the Studio Ghibli Wiki!</p>
        </div>
      </div>
    </div >
  )
}
export default Home;