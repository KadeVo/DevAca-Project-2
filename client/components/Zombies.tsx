import { useState, useEffect } from 'react'
import AddZombie from './AddZombie.tsx'
import { useZombies } from '../hooks/useZombies.ts'
import { NavLink } from 'react-router-dom'

function Zombies() {
  const hook = useZombies()
  const zombieDelete = hook.delete

  function onDeleteClicked(id?: number) {
    if (id) {
      zombieDelete.mutate(id.toString())
    }
  }

  const { data: zombies, isLoading, isError } = useZombies()

  if (!zombies || isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Something went wrong</p>
  }

  return (
    <div>
      <ul className="zombie-list">
        {zombies.map((zombie) => {
          return (
            <li key={zombie.id}>
              <img src={zombie.img} />
              <NavLink to={`/zombies/${zombie.id}`}>
                <p>{zombie.name}</p>
              </NavLink>

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
