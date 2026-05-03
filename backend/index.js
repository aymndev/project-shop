import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json([
        { id: 1, title: "Phone", price: 200 },
        { id: 2, title: "Laptop", price: 1000 }
    ]);
});
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});