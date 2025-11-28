import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

// Test route
app.get("/v1/server-status", (req, res) => {
    console.log(req.url);
    res.status(200).send("All services are active 👍");
});

app.listen(3000, () => "Server up and runnin!");
