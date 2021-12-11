import { nanoid } from 'nanoid'
import Redis from 'ioredis'
import { Boom } from '@hapi/boom'
import axios from 'axios'
function errorResponse(res, error) {
  const { output } = error
  return res.status(output.statusCode).json(output.payload)
}

export default async function handler(req, res) {
  //create
  if (req.method === 'POST') {
    const { url, userToken, text } = req.body
    if (!url || !userToken || !text) {
      errorResponse(
        res,
        Boom.badData('your data is bad you should feel bad :))')
      )
    }
    const userResponse = await axios.get(`https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/userinfo`,{
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json'
      }
    })


    const user = await userResponse.data
    const comment = {
      id: nanoid(),
      createdAt: Date.now(),
      text,
      user: {
        name: user.name,
        picture: user.picture
      }
    }

    let redis = new Redis(process.env.REDIS_URL)
    redis.lpush(url, JSON.stringify(comment))
    redis.quit()

    res.status(200).json(comment)
  }
  //fetch
  if (req.method === 'GET') {
    const { url } = req.query
    let redis = new Redis(process.env.REDIS_URL)
    const comments = await redis.lrange(url, 0, -1)
    redis.quit()

    const data = comments.map(o => JSON.parse(o))
    res.status(200).json(data)
  }
}
