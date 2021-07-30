# Gatsby Sanity Starter

## What this template gives you

This starter temaplate provides you with a barebones Gatsby frontend and a minimal Sanity CMS. Feel free to use this template however you like.

- A blazing fast website built with Gatsby + a customisable structured CMS built with Sanity.

## Getting started

I made a step-by-step tutorial on YouTube [HERE](https://www.youtube.com/watch?v=Jz3cxK1rztw)

Or follow the steps below:

1. Clone this repository
2. `cd sanity`
3. `npm install -g @sanity/cli`
4. You may need to install sanity again using `sanity install`
5. `sanity init` and follow the prompts
6. `npm run graphql-deploy`
7. `cd ..` to navigate back to the root folder
8. `npm install` in the project's root folder
9. `npm run dev` to start the studio and frontend locally
   - Your studio should be running on [http://localhost:3333](http://localhost:3333)
   - Your frontend should be running on [http://localhost:8000](http://localhost:8000)
10. Open [http://localhost:3333](http://localhost:3333) and copy the project ID from the Project info section
11. Navigate to the client-config.js file in the gatsby directory
12. Replace the project ID with your Project ID
13. `npm run build` to build to production locally

## Creditation

This starter template was inspired by jaydanurwin's [github repo](https://github.com/jaydanurwin/gatsby-sanity-minimal-starter)
