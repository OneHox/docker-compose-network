const express = require("express");
const Redis = require("ioredis");
const axios = require("axios");
const db = require('./db');
const os = require("os");
const app = express();

db();

const redis = new Redis(process.env.REDIS_URI);

app.get("/", (req, res) => {
    res.json({ ok: "from posts", access: process.env.USERS_SRV });
});

app.get("/host", (req, res) => {
    res.json({ os: os.hostname(), message: "I'm posts service" });
});

app.get("/getuser", async (req, res) => {
    const data = await axios.get(`${process.env.USERS_SRV}/host`);
    res.json({ from: "posts", to: data.data });
});

app.get("/set/:key/:value", async (req, res) => {
    const { key, value } = req.params;
    await redis?.set(key, value);
    res.json({ key, value });
});

app.get("/get/:key", async (req, res) => {
    const { key } = req.params;
    const v = await redis?.get(key);
    res.json({ value: v });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Running @ ${PORT}`);
});
