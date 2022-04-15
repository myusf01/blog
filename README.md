# blog

My personal blog page built with Next.JS, Redis and auth0.


![my-blog](https://mysf-sspipe.s3.eu-central-1.amazonaws.com/blog_myusuf-banner.png)

## Requirements

> NodeJS

> npm or yarn(I'm using npm)
> Upstash Account and connection
> Auth0 account, client id and domain name to access.

## How run it for yourself?

1. Clone repo to your machine
2. Add your variables to related fileds in `.env`

    ```bash
    NEXT_PUBLIC_URL=http://localhost:3000/
    NEXT_PUBLIC_AUTH0_CLIENT=
    NEXT_PUBLIC_AUTH0_DOMAIN=
    REDIS_URL=
    GITHUB_REPO_LINK=
    GITHUB_ACCESS_KEY=
    ```

3. Run `npm i` to install required packages.
4. Run `npm run dev` to start development server
5. I's ready!
6. Open <http://localhost:3000>
