const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const path = require("path");
const MongoClient = require("mongodb").MongoClient;

const PORT = 5050;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const MONGO_URL = process.env.MONGO_URL;
const MONGO_NAME = process.env.MONGO_NAME;
const client = new MongoClient(MONGO_URL);

//GET all users
app.get("/getUsers", async (req, res) => {
	await client.connect(URL);
	console.log("Connected successfully to server");

	const db = client.db(MONGO_NAME);
	const data = await db.collection("users").find({}).toArray();

	client.close();
	res.send(data);
});

//POST new user
app.post("/addUser", async (req, res) => {
	const userObj = req.body;
	console.log(req.body);
	await client.connect(URL);
	console.log("Connected successfully to server");

	const db = client.db(MONGO_NAME);
	const data = await db.collection("users").insertOne(userObj);
	console.log(data);
	console.log("data inserted in DB");
	client.close();
	res.send("User register successfully");
});

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});
