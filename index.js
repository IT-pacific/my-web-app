import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

console.log("Hello, this is a basic web app!");

// Test route
app.get("/v1/server-status", (req, res) => {
    console.log(req.url);
    res.status(200).send("All services are active 👍");
});

const users = [
    { id: 1, names: "Jane doe", email: "jane@xyz.io", password: "Pass45@#" },
];

app.post("/v1/login", (req, res) => {
    const { email, password } = req.body;

    const user = users.find(
        (user) => user.email === email && user.password === password
    );

    if (!user) {
        return res
            .status(401)
            .json({ Ok: false, message: "Invalid credentials" });
    }
    res.status(200).json({
        Ok: true,
        message: "Logged In your're very welcome!",
    });
});

app.get("/v1/about", (req, res) => {
    res.status(200).send("<html><h1>About Page.</h1></html>");
});

app.listen(3000, () => "Server up and runnin!");
