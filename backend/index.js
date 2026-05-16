import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./src/config/db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


// TEST
app.get("/", (req, res) => {
    res.send("API is working");
});


// GET PRODUCTS
app.get("/products", async (req, res) => {
    const [rows] = await db.query("SELECT * FROM products");
    res.json(rows);
});


// ADMIN MIDDLEWARE
const isAdmin = (req, res, next) => {
    const role = req.headers.role;

    if (role !== "admin") {
        return res.status(403).json({
            message: "Access denied"
        });
    }

    next();
};


// ADD PRODUCT (ADMIN ONLY)
app.post("/products", isAdmin, async (req, res) => {

    try {

        console.log(req.body);

        const {
            name,
            price,
            image,
            category,
            stock,
            description
        } = req.body;

        await db.query(
            "INSERT INTO products (name, price, image, category, stock, description) VALUES (?, ?, ?, ?, ?, ?)",
            [name, price, image, category, stock, description]
        );

        res.json({
            message: "Product added successfully"
        });

    } catch (err) {

        console.log("MYSQL ERROR:", err);

        res.status(500).json({
            message: "Database error"
        });
    }
});

// UPDATE PRODUCT (ADMIN ONLY)
app.put("/products/:id", isAdmin, async (req, res) => {

    const id = req.params.id;
    const { title, price } = req.body;

    await db.query(
        "UPDATE products SET title=?, price=? WHERE id=?",
        [title, price, id]
    );

    res.json({ message: "Product updated" });
});


// DELETE PRODUCT (ADMIN ONLY)
app.delete("/products/:id", isAdmin, async (req, res) => {

    const id = req.params.id;

    await db.query(
        "DELETE FROM products WHERE id=?",
        [id]
    );

    res.json({ message: "Product deleted" });
});


// LOGIN

app.post("/login", async (req, res) => {

    const { email, password } = req.body;

    const [rows] = await db.query(
        "SELECT * FROM users WHERE email=? AND password=?",
        [email, password]
    );

    if (rows.length === 0) {
        return res.status(403).json({
            message: "Invalid credentials"
        });
    }

    const user = rows[0];

    res.json({
        id: user.id,
        email: user.email,
        role: user.role
    });
});


// SERVER
app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});