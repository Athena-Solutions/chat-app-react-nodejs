**CHAT APPLICATION  **
Chat application build with the power of MERN Stack. You can find the tutorial [here](https://www.youtube.com/watch?v=otaQKODEUFs)


![login page](![Screenshot 2024-08-14 104907](https://github.com/user-attachments/assets/2b474bbd-042b-4867-a4f6-215e411af71b)
")
)

![home page](.![Screenshot 2024-08-14 104735](https://github.com/user-attachments/assets/dd2c1c78-78a8-44bd-b558-88136df2bf9d)
)

## Installation Guide

### Requirements
- [Nodejs](https://nodejs.org/en/download)
- [Mongodb](https://www.mongodb.com/docs/manual/administration/install-community/)

Both should be installed and make sure mongodb is running.
### Installation

#### First Method
```shell
git clone https://github.com/koolkishan/chat-app-react-nodejs
cd chat-app-react-nodejs
```
Now rename env files from .env.example to .env
```shell
cd public
mv .env.example .env
cd ..
cd server
mv .env.example .env
cd ..
```

Now install the dependencies
```shell
cd server
yarn
cd ..
cd public
yarn
```
We are almost done, Now just start the development server.

For Frontend.
```shell
cd public
yarn start
```
For Backend.

Open another terminal in folder, Also make sure mongodb is running in background.
```shell
cd server
yarn start
```
Done! Now open localhost:3000 in your browser.

#### Second Method
- This method requires docker and docker-compose to be installed in your system.
- Make sure you are in the root of your project and run the following command.

```shell
docker compose build --no-cache
```
after the build is complete run the containers using the following command
```shell
docker compose up
```
now open localhost:3000 in your browser.
