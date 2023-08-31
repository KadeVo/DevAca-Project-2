import request from 'superagent'

const rootUrl = '/api/v1'

export function getZombies(): Promise<string[]> {
  return request.get(rootUrl + '/zombies').then((res) => {
    return res.body
  })
}
