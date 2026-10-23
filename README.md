# বাজার দর (Bazar Dor)
A Bengali web app to check daily essential market prices — rice, lentils, oil, vegetables, fish, meat, dairy and spices — at a glance.

[Live Site](https://bazardor-hazel-mu.vercel.app) · [Repository](https://github.com/rabbicodes/bazardor)

---

## Table of Contents

- [About the Project](#about-the-project)
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Dependencies](#dependencies)
- [Installation & Setup](#installation--setup)
- [Folder Structure](#folder-structure)
- [Contributions](#contributions)
- [How to Contribute](#how-to-contribute)
- [License](#license)
- [Contact](#contact)

---

## About the Project
**বাজার দর** helps everyday people in Bangladesh quickly see what essential goods cost today. Market prices change often and are hard to track, so this app puts prices for common items in one clean, Bengali-language interface, along with how much each price has gone up or down.

---

## Project Overview
- **8 categories:** চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম-দুধ, মসলা
- **33 products** with today's price, unit (কেজি / লিটার / ডজন / পিস) and percentage change
- **Home page highlights** products whose prices rose or fell today
- **Product detail pages** with price summary and market-wise breakdown
- Fully in **Bengali**, including the date and numerals
- Deployed on **Vercel**

> Add a screenshot here: `![Bazar Dor Screenshot](./public/screenshot.png)`

---

## Key Features
- **Daily price overview** — all products with today's price and price change (%) in one place
- **Category browsing** — filter products by category (rice, dal, oil, vegetables, fish, meat, dairy, spices)
- **Price movers** — "আজ দাম বেড়েছে" and "আজ দাম কমেছে" sections on the home page
- **Product details** — price summary, average, minimum–maximum and market-wise table for each product
- **Authentication** — sign up / sign in with email & password, plus Google and GitHub login
- **Email verification & password reset** — powered by Resend
- **Responsive Bengali UI** — green-themed, mobile friendly design

---

## Tech Stack
**Frontend:** Next.js 16 · React · Tailwind CSS · TypeScript · HeroUI  
**Backend:** Next.js (Route Handlers / Server Components) · Better Auth · MongoDB  
**Tools:** Git · GitHub · VS Code · Vercel · Resend

---

## Dependencies
Major libraries used (check `package.json` for exact versions):

```json
{
  "next": "16.x",
  "react": "^19.x",
  "better-auth": "latest",
  "mongodb": "latest",
  "@heroui/react": "^3.x",
  "tailwindcss": "^4.x",
  "typescript": "^5.x"
}
```

---

## Installation & Setup
1. Clone the repo and install dependencies:

```bash
git clone https://github.com/rabbicodes/bazardor.git
cd bazardor
npm install
```

2. Set up environment variables by creating a `.env` file in the root directory:

```env
# Database
MONGODB_URL=your_mongodb_connection_string

# Better Auth
BETTER_AUTH_SECRET=your_random_secret
BETTER_AUTH_URL=http://localhost:3000

# Social login
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Email (verification & password reset)
RESEND_API_KEY=your_resend_api_key
```

3. Run the application:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **OAuth callback URLs:** register `http://localhost:3000/api/auth/callback/google` and `http://localhost:3000/api/auth/callback/github` for local development, and the same paths on `https://bazardor-hazel-mu.vercel.app` for production.

---

## Folder Structure

```plaintext
bazardor/
│
├── src/
│   ├── app/            # Routes: home, category, products, sign-in, sign-up
│   ├── component/      # Navbar, product cards, UI components
│   ├── lib/            # Better Auth config, auth client, helpers
│   └── type/           # TypeScript types (e.g. IProduct)
├── public/             # Static assets (logo, banner)
└── package.json
```

---

## Contributions

| Name  | Role                 | Contributions                               |
|-------|----------------------|---------------------------------------------|
| Rabbi | Full Stack Developer | Design, frontend, backend, auth, deployment |

---

## How to Contribute

  - Fork the Project
  - Create a branch (`git checkout -b feature/AmazingFeature`)
  - Commit changes (`git commit -m 'Add some AmazingFeature'`)
  - Push the branch (`git push origin feature/AmazingFeature`)
  - Open a Pull Request

---

## License
Distributed under the MIT License. See `LICENSE.txt` for more information.

---

## Contact

**Live URL:** [Live Site](https://bazardor-hazel-mu.vercel.app)  
**GitHub:** [rabbicodes](https://github.com/rabbicodes)  
**Email:** [your-email](rabbipatuary1@gmail.com)
