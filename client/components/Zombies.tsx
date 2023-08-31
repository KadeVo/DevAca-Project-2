import { useState, useEffect } from 'react'
import AddZombie from './AddZombie.tsx'
import { useZombies } from '../hooks/useZombies.ts'
import '../styles/tooltip.css'

function Zombies() {
  const hook = useZombies()
  const zombieDelete = hook.delete

  const { data: zombies, isLoading, isError } = useZombies()

  if (!zombies || isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Something went wrong</p>
  }

  function onDeleteClicked(id?: number) {
    if (id) {
      zombieDelete.mutate(id)
    }
  }

  return (
    <div>
      <ul className="zombie-list">
        {zombies.map((zombie) => {
          return (
            <li key={zombie.id}>
              {/* <img src={zombie.img} /> */}
              <div className="tooltip-trigger">
                <p>
                  {zombie.name} is in {zombie.location}
                </p>
                <div className="tooltip tooltip-right">
                  <p>
                    <b>Species:</b> {zombie.species}
                  </p>
                  <p>
                    <b>Speed:</b> {zombie.speed}
                  </p>
                  <p>
                    <b>Power:</b> {zombie.power}
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  onDeleteClicked(zombie.id)
                }}
              >
                Delete
              </button>
            </li>
          )
        })}
      </ul>

      <AddZombie />
    </div>
  )
}

export default Zombies
