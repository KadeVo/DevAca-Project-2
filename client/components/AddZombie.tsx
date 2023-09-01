import { useState, FormEvent, ChangeEvent } from 'react'
import { useZombies } from '../hooks/useZombies.ts'
import { addZombie as addNewZombie } from '../apis/zombies.ts'
// npm run knex migrate:latest
// npm run knex seed:run
const initialFormData = {
  name: '',
  species: '',
  power: '',
  speed: 0,
  location: '',
}

function AddZombie() {
  const [form, setForm] = useState(initialFormData)
  const locationArray = [
    'Agape',
    'AuKudo',
    'Assassin Mountain',
    'Boom Bay',
    'Dire Gates',
    'Loto',
    'Market town',
    'NergalStan',
    'Nabuaga',
    'Torn spleen',
    'Old town',
    'Purgus',
    'Slaafur',
    'StaintStand',
  ]

  const hook = useZombies()
  const zombieAdd = hook.add

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    zombieAdd.mutate(form)
    return addNewZombie(form)
    setForm(initialFormData)
  }

  return (
    <>
      <h2>Add new Zombie</h2>

      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            id="name"
            onChange={handleChange}
            value={form.name}
            name="name"
          />
        </p>

        <p>
          <label htmlFor="species">Species:</label>
          <br />
          <input
            id="species"
            onChange={handleChange}
            value={form.species}
            name="species"
          />
        </p>

        <p>
          <label htmlFor="power">Power:</label>
          <br />
          <input
            id="power"
            onChange={handleChange}
            value={form.power}
            name="power"
          />
        </p>

        <p>
          <label htmlFor="speed">Speed:</label>
          <br />
          <input
            id="speed"
            onChange={handleChange}
            value={form.speed === 0 ? '' : form.speed}
            name="speed"
          />
        </p>

        <p>
          <label htmlFor="location">Location:</label>
          <br />
          <select
            id="location"
            onChange={handleChange}
            value={form.location}
            name="location"
          >
            {locationArray.map((location, index) => {
              return (
                <option key={index} value={location}>
                  {location}
                </option>
              )
            })}
          </select>
        </p>

        <button>Add Zombie</button>
      </form>
    </>
  )
}

export default AddZombie
