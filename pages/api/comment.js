import { nanoid } from "nanoid";
import Redis from "ioredis";

export default async function handler(req, res) {
  //create
  if (req.method === "POST") {
    const { url, userToken, text } = req.body;
    if (!url || !userToken || !text)
      return res.status(400).json({ message: "bos gelen seyler var" });

    const userResponse = await fetch(
      `https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/userinfo`,
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const user = await userResponse.json();
    const comment = {
      id: nanoid(),
      createdAt: Date.now(),
      text,
      user: {
        name: user.name,
        picture: user.picture,
      },
    };

    let redis = new Redis(process.env.REDIS_URL);
    redis.lpush(url, JSON.stringify(comment));
    redis.quit();

    res.status(200).json(comment);
  }
  //fetch
  if (req.method === "GET") {
    res.status(200).json({ name: "John Doe" });
  }
}
