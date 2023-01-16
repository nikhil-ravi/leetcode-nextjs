# ScuffedCode

This is Next.js clone of Leetcode with my solutions to some of Leetcode's questions.
The data is hosted on Supabase PostgreSQL database and includes all the metadata included by Leetcode for each of 2500~ questions.

## Getting Started

### Setup the database

Visit [LeetCode-Scraper](https://github.com/nikhil-ravi/Leetcode-Scraper) to setup your own Supabase Database with leetcode questions and their associated metadata, and your solutions.

### Next.js Web Application

First, install the dependencies:

```bash
npm i --legacy-peer-deps
```

Setup your `.env.config` file:

```env
NEXT_PUBLIC_SUPABASE_URL = <NEXT_PUBLIC_SUPABASE_URL>
NEXT_PUBLIC_SUPABASE_KEY = <NEXT_PUBLIC_SUPABASE_KEY>
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
