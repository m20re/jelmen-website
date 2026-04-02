# Jelmen Portfolio Website

Portfolio website for Jelbot, allowing for continual updates and tagging of images along with related portfolio niceties.

The website can be found here: https://jelmen-website.vercel.app/.

## Features

- Portfolio website sections: about, links to social medias, and more
- Gallery to view the works of the artist. Each has their own title, description, and tags.
- Content Management System (CMS) integration with [Sanity.io](https://sanity.io) for adding/removing images extenrive coding knowledge.

## Tech Stack

- **Framework**: Next.js 14
- **Package Manager**: pnpm
- **Styling**: Tailwind V4, CSS Animations
- **UI Libraries**: react-rnd, next-themes
- **CMS**: Sanity.io
- **Deployment**: Vercel

## Screenshots

To be added

## Personal Learnings

Learning how to develop webpages with JSX, Tailwind, and React in general.

I learned how react... reacts with variables that I set: `const [var, setVar] = useState("This is var...");`

I learned many words and a general idea of what tailwind is supposed to look like.

I learned a lot more about object functions and how they can be used to easily display or do operations on items therein.

## Setup/Install

1. Clone the repo
2. This project uses `pnpm`, run `pnpm install`
3. Create a new file called `.env.local`, and paste the contents within `.env.example` within
4. This project uses sanity, so I suggest making a project within Sanity.io, and populate the env file with the relevant information.
5. Run `pnpm run dev` or `pnpm dev` and it should a `localhost:3000` server.
