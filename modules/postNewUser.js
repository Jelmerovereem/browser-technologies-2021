import { db } from "../server.js";
import { v4 as uuidv4 } from "uuid";

export default async function postNewUser(req, res) {
	const userData = {
		id: uuidv4(),
		userName: req.body.username,
		password: req.body.password
	};
	db.collection("users").insertOne(userData);
	req.session.user = userData;
	res.redirect("/profile");
}