# Game Search and Filter Application (RAWG.io Clone)

## Project Description

This project is a game search and filter application that allows users to explore and filter games based on various criteria. Built using React, TypeScript, and Vite, this application mimics the functionality of the RAWG.io website, providing a user-friendly interface to search for games, filter by genre and platform, and sort results.

## Features

- Search Games: Allows users to search for games by name or terms.
- Filter by Genre: Users can filter the games displayed by genre.
- Filter by Platform: Users can filter the games displayed based on the platforms they are available on.
- Sort Games: Options to sort games by criteria such as name, popularity, ratings, etc.
- Responsive Design: The application is designed to be responsive and accessible on different sized devices.

## Tech Stack

**Frontend**

- TypeScript: For better development experience
- React: Building the user interface
- Vite: For an efficient development environment
- Chakra UI: For styling and user interface components

<div>
  <img src='https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000' alt="TypeScript Logo">
  <img src='https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000'  alt="React Logo">
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSI-cU1al25MncPn93L-ZjnMY1FLlmXhWodg&s' width=90 height=90 alt="Vite Logo">
  <img src='https://avatars.githubusercontent.com/u/54212428?s=280&v=4' width=90 height=90 alt="Chakra UI logo">
</div>

## Installation

### Step One: Clone the repository

```bash
git clone 'https://github.com/your-username/game-hub.git'
cd game-hub
```

### Step Two: Install dependencies
```bash
npm install
```

### Step Three: Set up environment variables

- Create a `.env` file in the root of the project and add your API key for RAWG.io

```bash
VITE_API_KEY=your_rawg_api_key
```

### Step Four: Run the development server
```bash
npm run dev
```

## Known Issues

- Platform Filter: Some platform filters may not work as expected for PlayStation and iOS.

1. When filtering games by PlayStation platform, no games are displayed on the page.

![PlayStation Filter](src/assets/Screenshot%20(14).png)

2. When filtering games by iOS, games that are not available on iOS are still displayed.

![iOS Filter](src/assets/Screenshot%20(15).png)

## Future Plans

- Improve the filter functionality
- Add more sorting and filtering options
- Enhance UI/UX for better user experience


## Deployment Link

https://game-hub-six-pink.vercel.app/