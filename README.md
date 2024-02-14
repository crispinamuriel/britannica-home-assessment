# Britannica Home Fashions Assessment

**Objective:** To create a simplified web application using Next.js that demonstrates fundamental
capabilities with server-side features and client-side interactivity.

## Project Setup

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Mock API integration

Created Next.js application that displays user profiles fetched from a mock API https://jsonplaceholder.typicode.com/users

## Technologies used

- Next.js
- create-next-app
- React Hooks
- TailwindCSS
- [Tailwind Icon](https://heroicons.com)

## Getting Started

Download this git repository, cd into the repository.

Run the development server:

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the list of Mock profiles. You can click into each profile to navigate into a single profile to see the dynamic routing. 

### Assumptions 

The assumptions were to use a Mock API instead of a database to create user profiles, The mock API that was used that can be found here: https://jsonplaceholder.typicode.com/users. 

A Server Action was created to listen for profile likes sent in a POST to http://localhost:3000/api/likeProfile/${id}. It was assumed that the only functionality was to be able to handle a single like on the specific profile with the dynamic profile ID.
