import dotenv from "dotenv";
dotenv.config();

import express from "express";
import session from "express-session";

import { networkInterfaces } from "os";

import {default as mongo} from "mongodb";

import bodyParser from "body-parser";
const urlencodedParser = bodyParser.urlencoded({
  extended: true
});

// init app
export const app = express();

import routes from "./modules/controllers/routes.js";
import posts from "./modules/controllers/posts.js";

app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true
}));

app.use(express.static("static"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");

routes();
posts();

const url = process.env.DB_HOST + ':' + process.env.DB_PORT;

export let db;

mongo.MongoClient.connect(url, (err, client) => {
	if (err) {
		console.log(err)
		console.log("Error, database connection failed");
	} else {
		console.log("database connection succeeded");
	}
	db = client.db(process.env.DB_NAME);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
	const nets = networkInterfaces();
	const results = Object.create({});
	for (const name of Object.keys(nets)) {
		for (const net of nets[name]) {
			if (net.family === "IPv4" && !net.internal) {
				if (!results[name]) {
					results[name] = [];
				}
				results[name].push(net.address);
			}
		}
	}
	let ipstring;
	results.wifi0 ? ipstring = `${results.wifi0[0]}:${port}` : "...IPv4 not available...";
	console.log(`server is running on localhost:${port} and on ${ipstring}`);
});