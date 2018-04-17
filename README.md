Simple champion browser app for League of Legends using the Riot API. Pulls in data using the static champions endpoint and stores the response in local storage.

Not production ready as it uses a Node proxy server and Create React App's proxy setting to work with CORS. You may also need to add some firther throttling/caching settings when requesting the API due to rate limiting from the Riot API 

## Getting Started

To start the app, create a file called '.env'  in the root folder and input your Riot Games API Key like so:

`API_KEY=YOURKEY`

 Then run `npm install` in both the client and root folder. You should now be able to spin up the proxy server and client simultaneously using the `yarn dev` command.

