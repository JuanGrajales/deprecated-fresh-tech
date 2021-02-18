# Technical Challenge

## Questions

- How did you decide on the technical and architectural choices used as part of your solution?
  The client file structure is broken up into pages (these resuse components) , resuable components, services (e.g. APIs), and context folder. Most styling was kept in the component scope. This approach minimized code redundancy and faciliate styling changes. Due to the time constraint Context API was used instead of Redux.
- Are there any improvements you could make to your submission?
  Towards the end styling changes became more tedious so I would add Sass before the project gets any bigger.
- What would you do differently if you were allocated more time?
  I would add automated tests to ensure that nothing breaks when implementing new features, add Sass to maintain styling consistent, polish the styling on the mobile and tablet views, made the header sticky to improve UI in the Series/Movies pages, and improve my deployment build.

## Demo

[Click here](https://fresh-tech.herokuapp.com/) to view the deployed version.

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- Node.js
  [Node download](https://nodejs.org/en/download/)

- MongoDB
  [MongoDB download](https://www.mongodb.com/try/download/community)

### Installation

1. Clone repo

```sh
git clone https://github.com/JuanGrajales/fresh-tech.git
```

If you're using ssh clone using

```sh
git clone git@github.com:JuanGrajales/fresh-tech.git
```

2. Install dependencies for both client and server directories by running the following in the root

```sh
npm install
```

3. For persistant data add the MONGODB_URI to you .env file

```sh
MONGODB_URI = atlas-uri
```

4. Start client

```sh
npm run start-client
```

5. Start server

```sh
npm run start-server
```
