import connection from './connection.ts'
import { Zombie } from '../../models/zombies.ts'

export async function getAllZombies(db = connection): Promise<Zombie[]> {
  return db('zombies').select()
}
