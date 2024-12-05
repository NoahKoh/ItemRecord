import express from "express"
import mysql from "mysql2"
import cors from "cors"

const app = express() // Express to handle requests

const db = mysql.createConnection({ // Connect to the database
    host:"localhost",
    user:"root",
    password:"password", // password here
    database:"test"
})

app.use(express.json()) // Middleware to parse JSON
app.use(cors()) // Muddleware for Cross-Origin Resource Sharing. In order to interact with backend.

app.get("/", (req, res)=> {
    res.send("test")
})

app.get("/items", (req, res)=> { {/* /items is the endpoint for express server. The items table */}
    const q = "SELECT * FROM items"
    db.query(q, (err, data) => {
        if (err) {return res.json(err)}
        return res.json(data)
    })
})

app.listen(8800, ()=> {
    console.log("Connected to backend!")
})