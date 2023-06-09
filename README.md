# AI-TalkBot
AI Voice Chatbot is a web application that allows users to interact with an AI-powered chatbot using voice commands. The application records the user's voice, transcribes it using Google's Cloud Speech-to-Text API, sends the transcription to a backend server that uses an AI model to generate a response, and then plays the response using Google's Cloud Text-to-Speech API. The application also allows users to store their chat data on the  blockchain.

Video Link: https://www.youtube.com/watch?v=EmWHFGDZNkc&t=3s

![ai-talk-bot vercel app_](https://github.com/RishabhGithub7348/AI-TalkBot/assets/75687649/1c981574-c99e-48ad-ad00-fc5e2f42a37d)

![ai-talk-bot vercel app_ (1)](https://github.com/RishabhGithub7348/AI-TalkBot/assets/75687649/68793f7f-37f4-4046-aa96-55073eb27451)

Technologies Used
React
Node.js
Express.js
MongoDB
Google Cloud Speech-to-Text API
Google Cloud Text-to-Speech API
Polygon Network
Solidity

Getting Started
To run the application locally, follow these steps:

Clone the repository:
git clone https://github.com/RishabhGithub7348/AI-TalkBot.git

Install the dependencies:

Copy code
cd ai-voice-chatbot
npm install

Create a .env file in the root directory of the project and add the following environment variables:

REACT_APP_GOOGLE_CLOUD_PROJECT_ID=your-project-id
REACT_APP_GOOGLE_APPLICATION_CREDENTIALS=path/to/your/key.json
REACT_APP_BACKEND_URL=http://localhost:3001
MONGODB_URI=mongodb://localhost:27017/voice-chatbot
POLYGON_NETWORK_URL=https://rpc-mainnet.maticvigil.com
POLYGON_NETWORK_PRIVATE_KEY=your-private-key

Replace your-project-id with your Google Cloud project ID, path/to/your/key.json with the path to your Google Cloud service account key file, mongodb://localhost:27017/voice-chatbot with the URI of your MongoDB database, your-api-token with your Filecoin API token, and your-private-key with your private key for the Polygon Network.

Start the backend server:
npm run start

Start the React development server:
npm run dev

Features
Voice recording and transcription using Google's Cloud Speech-to-Text API
AI-powered chatbot using a backend server and an AI model
Text-to-speech using Google's Cloud Text-to-Speech API
Storing chat data on the  blockchain
Responsive design

Future Improvements
Implement authentication and user accounts
Improve the accuracy of the speech recognition and transcription
Add support for other languages
Use a more advanced AI model for generating responses
Implement more advanced storage features on the Filecoin blockchain, such as data retrieval and deletion
