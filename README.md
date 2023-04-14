# DailyMafia website

- [Project summary](#project-summary)
- [Technology implementation](#technology-implementation)
- [Project Development Roadmap](#project-development-roadmap)

## Project summary

### Front End and Back End

This will be created using a frontend and a backend and is a full stack application written completely in typescript.

- [FrontEnd](https://github.com/BarryPercy/dailymafia-frontend)
- [BackEnd](https://github.com/BarryPercy/dailymafia-backend)

### Short Description

A website for the Daily Mafia community to facilitate randomizing and facilitating social deception games and storing statistics on players involved in the games e.g. their win rate. The games are played using zoom on webcams but the game would be facilitated via the website.

## Technology implementation

### Front End

- Typescript
- React
- Redux
- Bootstrap 5
- Socket.io

### Back End

- Typescript
- Node.js
- Express
- MongoDB
- Socket.io


## Project development roadmap

### Desired Features

- Login System
  - Register/Login with JWT
  - Investigation into Authentication with discord users.
- Lobby Creation with a host user and logged in users. Potentially updated live via socket.io.
- Game of Mafia
  - Game lobby Chat using socket.io
  - Game randomization e.g. deciding which players are the mafia/cop/vigilante/doctor.
  - Monitoring whether players are away/ready to keep playing.
  - Facilitating player input and showing the results of their actions e.g. which players have died overnight.
- Game History to view results and player performance.
- Forum for game or off-topic discussion.
- Database structure for statistics of each player and game.
- Section to view statistics on the website to show player performance/rankings.


## Author
### Barry Percy

- [Github](https://github.com/BarryPercy)
- [Portfolio(currently in progress)](https://barry-percy-portfolio.vercel.app/)
