# GitHub Repo Finder

This is a ReactJS application that uses GitHub's public API to search for repositories and display their details in a card format. The application also allows sorting the results based on various criteria.

## Installation
To run this application, you will need Node.js and npm/yarn installed on your computer. Clone this repository and run the following commands in your terminal:

```
cd github-repo-finder
npm install
npm run dev
```

This will start the application in development mode on http://localhost:4173.

To build the application for production, run:
```
npm run build
```

## Features
- Search for public GitHub repositories using the search field
- Fetch and display data of repositories in a card format
- Each card contains repository details such as avatar, repo name, stars, description, and language
- Sort the results based on stars, watchers count, score, name, created_at, and updated_at.

## Dependencies
This application uses the following dependencies:

**axios**: Promise-based HTTP client for the browser and node.js  
**react**: JavaScript library for building user interfaces  
**react-dom**: DOM-specific methods for React  
**react-query**: Data fetching and caching library for React  
**styled-components**: CSS-in-JS library for React