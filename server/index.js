require('dotenv').config();
const express = require("express");
const multer = require('multer');
const app = express();

const fs = require('fs');
const cors = require('cors');

const AssetJson = require('./artifacts/contracts/Asset.sol/Asset.json')

const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK(process.env.yourPinataApiKey, process.env.yourPinataSecretApiKey);

const PORT = process.env.PORT || 3080;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

//use cors to allow cross origin resource sharing
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);

app.get("/asset-contract", (req, res) => {
    res.json(AssetJson);
    console.log('Sent Asset.json')
});

const upload = multer({ dest: './tmp/my-uploads/' })

app.post('/upload', upload.single('file'), (req, res) => {
    const readableStreamForFile = fs.createReadStream(req.file.path);
    console.log('req.body', req.body);
    console.log('req.file', req.file);

    pinata.pinFileToIPFS(readableStreamForFile).then(async (result) => {
        console.log(result);
        fs.unlinkSync(`./tmp/my-uploads/${req.file.filename}`, err => console.log(err));
    }).catch((err) => {
        console.log(err);
    });

    res.json(req.file)
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
