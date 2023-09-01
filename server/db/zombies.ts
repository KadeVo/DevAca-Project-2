import connection from './connection.ts'
import { Zombie } from '../../models/zombies.ts'

export async function getAllZombies(db = connection): Promise<Zombie[]> {
  return db('zombies').select()
}

export async function addNewZombie(newZombie: Zombie): Promise<Zombie[]> {
  return connection('zombies')
    .insert({ ...newZombie })
    .returning('*')
}
// deleteId = location
// .where('deleteId')
//                                deleteId : number
//                                id
export async function deleteById(id: number) {
  return connection('zombies').delete().where({ id })
  // router.delete('/:id', async (req, res) => {
  // localhost:3000/1
  // id === 1
  // hospital
  //   const deleteId = req.params.id
  //   console.log(deleteId)
  //   const deleteZombie = await db.deleteById(deleteId)
  //   res.json(deleteZombie)
  // })
}
