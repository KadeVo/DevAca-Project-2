import { Router } from 'express'

import * as db from '../db/zombies.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const zombies = await db.getAllZombies()

    res.json(zombies)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
