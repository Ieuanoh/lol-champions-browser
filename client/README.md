Simple champion browser app for League of Legends using the Riot API. Pulls in data using the static champions endpoint and stores the response in local storage.

Not production ready as it uses a Node proxy server due to CORS.

## Getting Started

To start the app, create a .env file in the root folder and input your Riot Games API Key like so:

`API_KEY=YOURKEY`

 Then run `npm install` in both the client and root folder. You should now be able to spin up the proxy server and client simultaneously using the `yarn dev` command.

