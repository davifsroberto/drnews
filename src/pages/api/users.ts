import { NextApiRequest, NextApiResponse } from 'next'

export default (resquest: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Davi' },
    { id: 2, name: 'Roberto' },
    { id: 3, name: 'Bila' }
  ]

  return response.json(users)
}
