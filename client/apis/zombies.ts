import request from 'superagent'
import { Zombie } from '../../models/zombies'

const rootUrl = '/api/v1/zombies'

export function getZombies(): Promise<Zombie[]> {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}
// validateNoSnakeCase()
export function addZombie(zombie: Zombie): Promise<Zombie[]> {
  return request
    .post(rootUrl)
    .send(zombie)
    .then((res) => {
      // validateNoSnakeCase()
      // validatePostReponse()
      return res.body
    })
}

export function deleteZombie(id: number): Promise<Zombie[]> {
  return request
    .delete(`${rootUrl}/${id}`)

    .then((res) => {
      // validateNoSnakeCase()
      // validatePostReponse()
      console.log(res.body)
      return res.body
    })
}
