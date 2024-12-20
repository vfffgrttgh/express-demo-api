import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hi from Aayansh123's Place!")
});

app.get("/api", (req, res) => {
    res.json([
        { "id": 1, title: "Destroyer" },
        { "id": 2, title: "Generator" },
    ])
});

app.listen(8080, () => {
    console.log("Running on port:8080!")
});