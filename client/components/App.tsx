import { useZombies } from '../hooks/useZombies.ts'

function App() {
  const { data } = useZombies()

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Zombies!</h1>
        <ul>{data && data.map((zombie) => <li key={zombie}>{zombie}</li>)}</ul>
      </div>
    </>
  )
}

export default App
