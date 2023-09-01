import Zombies from './Zombies'
import Nav from './Nav'

function App() {
  return (
    <>
      <div className="app">
        <h1>Take a Bite!</h1>
        <h2>Login to see the list of Zombie out there!</h2>
        <Nav />
        <Zombies />
      </div>
    </>
  )
}

export default App
