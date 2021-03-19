import { db } from "../server.js";

export default async function removeMatch(req, res) {
	const matchId = req.body.matchId;
	console.log(matchId)
	db.collection("matches").deleteOne({id: matchId}, (err) => {
		if (err) console.log(err)
			else {
				res.redirect("/dashboard");
			}
	})
}