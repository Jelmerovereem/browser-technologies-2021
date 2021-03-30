import { db } from "../server.js";

export default async function adminCode(req, res) {
	const receivedCode = req.body.adminCode;
	const code = "0000";
	const matches = await db.collection("matches").find().toArray();
	if (receivedCode === code) {
		res.render("adminDashboard.ejs", {
			matches
		})
	} else {
		res.redirect("/admin")
	}
}