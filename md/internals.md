# Internals

How some of the internals work of the engine.

## API Oauth

Users are authenticated using the [NextAuth.js](https://next-auth.js.org/) framework and [Github Auth](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps) api.

When the user accepts the login they are sent to the `/api/auth/callback/github` route. This route is handled by the `pages/api/auth/[...nextauth].js` file.

## Page Url Tree

- `/` - Landing page
- `/home` - Home page

- `/` - 
- `/search/engine` - 
- `/account` -
    - `/{userId}` - 
    - `/{userId}/settings` - 
- `/auth` - 
    - `/login` - 
    - `/logout` - 

## Color Theme

## Tailwind

- Main - teal-500

## Database

- MongoDB x Prisma are used for the database. The database is hosted on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). The database is accessed using [Prisma](https://www.prisma.io/).

The main ready we only use atlas and not a local server is because is [this](https://www.prisma.io/docs/concepts/database-connectors/mongodb#example).