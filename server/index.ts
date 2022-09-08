const express = require("express");
const app = express();

const path = require('path');
const AssetJson = require('./artifacts/contracts/Asset.sol/Asset.json')

const PORT = process.env.PORT || 3080;

app.get("/asset-contract", (req, res) => {
    res.json(AssetJson);
    console.log('Sent Asset.json')
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
