import request from 'superagent'
import { Zombie } from '../../models/zombies'

const rootUrl = '/api/v1'

export function getZombies(): Promise<Zombie[]> {
  return request.get(rootUrl + '/zombies').then((res) => {
    return res.body
  })
}

