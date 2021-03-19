import { db } from "../server.js";

export default async function authAndRespond(req, res) {
	const receivedUsername = req.body.username.toLowerCase();
	const userData = await db.collection("users").findOne({userName: receivedUsername});
	if (userData != null) {
		const receivedPassword = req.body.password;
		if (receivedPassword === userData.password) {
			req.session.user = userData;
			res.redirect("/profile");
		} else {
			console.log("wachtwoord niet correct")
			res.redirect("/profile");
		}
	} else {
		console.log("username does not exists")
		res.redirect("/profile");
	}
}