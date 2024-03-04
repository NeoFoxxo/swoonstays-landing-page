# Swoonstays Landing Page

A landing page for <a href="https://swoonstays.au/v1" target="_blank">Swoonstays</a> that allows customers to select their preferred state and category to find the perfect place to stay. The website is built with Astro, Preact, Tailwind CSS, DaisyUI, and utilises Preact Signals.

<br><a href="https://swoonstays.au" target="_blank"><b>View Landing Page</b></a>

## Features

- 📍 Select place categories and states to find the perfect Swoonstay
- 📱 Fully responsive on mobile
- 🎨 Modern design
- ➕ Easily add new categories and states
- ⚡ High performance - achieves 100 on every Lighthouse metric

## How To Run It

To run this on your local machine, you will need to have the <strong>latest LTS version</strong> of Node.js installed.

1. Clone the repository to your local machine
2. Open your terminal and run `npm install` and `npm run build`
3. Then run the `npm run prod` command
4. Access the website and enjoy!

## Adding new Categories or States

1. Navigate to the data folder in `src/data/`
2. Simply add the new data into to either the `states.ts` or `categories.ts` files
3. Run the `npm run build` command
4. The site will now have the new states and categories.

## Deploying Site to Production

1. Run the `npm run build` command
2. Simply copy the contents of the `/dist` folder in the root directory to your web server

## Website Images

<img src="https://github.com/NeoFoxxo/swoonstays-landing-page/blob/master/repo-images/Home.png" alt="Home Section" width="100%">
<img src="https://github.com/NeoFoxxo/swoonstays-landing-page/blob/master/repo-images/Category.png" alt="Category Selection" width="100%">
<img src="https://github.com/NeoFoxxo/swoonstays-landing-page/blob/master/repo-images/State.png" alt="State Selection" width="100%">
