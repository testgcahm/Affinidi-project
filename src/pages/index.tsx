const express = require('express');
require('dotenv').config();
const { affinidiProvider } = require('@affinidi/passport-affinidi');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3001;

const initializeServer = async () => {

    app.get('/', function (req: any, res: { json: (arg0: { success: string; }) => void; }, next: any) {
        res.json({ success: 'Express' });
    });

    await affinidiProvider(app, {
        id: "affinidi",
        issuer: process.env.AFFINIDI_ISSUER,
        client_id: process.env.AFFINIDI_CLIENT_ID,
        client_secret: process.env.AFFINIDI_CLIENT_SECRET,
        redirect_uris: ['http://localhost:3000/auth/callback'], 
        handleCredential: (credential: any) => {
            console.log('Received credential:', credential);
        },
    });

    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
    });

};

initializeServer();
