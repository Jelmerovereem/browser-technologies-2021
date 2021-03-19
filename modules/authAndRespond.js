import { db } from "../server.js";

export default async function authAndRespond(req, res) {
	const receivedUsername = req.body.username.toLowerCase();
	const adminData = await db.collection("admins").findOne({userName: receivedUsername});
	if (adminData != null) {
		const receivedPassword = req.body.password;
		if (receivedPassword === adminData.password) {
			req.session.admin = adminData;
			res.redirect("/dashboard");
		} else {
			console.log("wachtwoord niet correct")
			res.redirect("/admin");
		}
	} else {
		console.log("username does not exists")
		res.redirect("/admin");
	}
}