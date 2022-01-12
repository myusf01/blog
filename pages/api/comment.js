import { nanoid } from "nanoid";
import Redis from "ioredis";
import { Boom } from "@hapi/boom";

function errorResponse(res, error) {
  const { output } = error;
  return res.status(output.statusCode).json(output.payload);
}

export default async function handler(req, res) {
  // POST comment on call.

  if (req.method === "POST") {
    // Get url, userToken, and comment text from body.
    const { url, userToken, text } = req.body;
    if (!url || !userToken || !text) {
      // If any data came from request is undefined then return error message.
      errorResponse(
        res,
        Boom.badData("your data is bad you should feel bad :))")
      );
    }
    // Fetch user info from Auth0 using user token.
    const userResponse = await fetch(
      `https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/userinfo`,
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    // Convert fetched info to json.
    const user = await userResponse.json();
    // Create comment object that has 
    // id, create date, comment text, user' name and profile picture
    const comment = {
      id: nanoid(),
      createdAt: Date.now(),
      text,
      user: {
        name: user.name,
        picture: user.picture,
      },
    };
    // Create a redis instance
    let redis = new Redis(process.env.REDIS_URL);
    // Push comment with url it came from
    redis.lpush(url, JSON.stringify(comment));
    // Quit redis
    redis.quit();
    
    res.status(200).json(comment);
  }

  
  // GET comments on call.

  if (req.method === "GET") {
    // Get url from request to fetch comments
    const { url } = req.query;
    // Create a new Redis instance
    let redis = new Redis(process.env.REDIS_URL);
    // Get comments in range and with urş key.
    const comments = await redis.lrange(url, 0, -1);
    redis.quit();
    // Parse json data then send.
    const data = comments.map((o) => JSON.parse(o));
    res.status(200).json(data);
  }
}
