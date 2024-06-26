# Welcome to Monta Ai Chatgpt!

**Instructions To install and run project!, we have two ways**

1. Using Docker
    - Download Docker for Desktop
    - Run this command in the pulled folder `docker-compose up --build` and it will create new Docker Container and and run the project automatically.
    - To format the new code and detect the lint violations run `npm run format-lint` in `client folder`

2. Without Dockers
    - please in the pulled folder write `npm run dev` and it will download the whole dependance and run the project automatically.

**Important**
Please make sure you have Node.js installed on your machine. If not, you can download it
But don't miss that we have a `.env` file in `server folder`, please consider it within running the server

- PORT=3000
- OPEN_AI_API_KEY=
- ORGANIZATION_ID=
- PROJECT_ID=

**Project Backend Dependencies**

- cors
- dotenv
- express
- helmet
- openai

**Project Frontend Dependencies**

- axios
- react
- react-dom
- react-icons
- eslint
- vite
- prettier

Author : Mohamed Hashem
