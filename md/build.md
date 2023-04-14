## Internal Build Guide

This guide will go over the steps needed to build the project from source.

### Prerequisites

- [Node.js](https://nodejs.org/en/) - v18+
- [Yarn](https://yarnpkg.com/) - Berry
- [MongoDB](https://www.mongodb.com/) - Setup a atlas instance

### Setup

1. Clone the repo
2. Install dependencies with `yarn`
3. Create a `.env.local` file in the root of the project
4. Add the following to the `.env.local` file

```env
# Next Auth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=secret

# Github Oath
GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET=
GITHUB_CALLBACK_URL=http://localhost:3000/api/auth/callback/github

# Web 
HOME_PAGE_URL=http://localhost:3000

# Database
DATABASE_URL="mongodb-connection-url"
```

### Running the project

1. Generate the prisma client with `yarn prisma generate` *(You don't need to redo this unless you edit the prisma.schema file)*
2. Build the project with `yarn dev`
3. Navigate to `http://localhost:3000`

### Building the project

1. Generate the prisma client with `yarn prisma generate`
2. Build the project with `yarn build`
3. Start the project with `yarn start`
4. Navigate to `http://localhost:3000`

### Deploying the project

Deployments are handled by vercel and are done automatically when a commit is pushed to the main and dev branches.