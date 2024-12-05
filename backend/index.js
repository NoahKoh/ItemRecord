import express from "express"
import mysql from "mysql2"

const app = express() // Express to handle requests

const db = mysql.createConnection({ // Connect to the database
    host:"localhost",
    user:"root",
    password:"password", // password here
    database:"test"
})

app.get("/", (req, res)=> {
    res.send("test")
})

app.listen(8800, ()=> {
    console.log("Connected to backend!")
})