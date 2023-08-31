import connection from './connection.ts'
import { Fruit } from '../../models/zombies.ts'

export async function getAllFruits(db = connection): Promise<Fruit[]> {
  return db('fruit').select()
}
