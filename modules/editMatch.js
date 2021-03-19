import { db } from "../server.js";

export default async function editMatch(req, res) {
	const matchId = req.body.matchId;
	const matchData = req.body;
	const updatedObj = {
		"id": matchId,
		"dateTime": matchData.dateTime,
		"team1": matchData.team1,
		"team1Score": matchData.team1Score,
		"team2": matchData.team2,
		"team2Score": matchData.team2Score,
		"matchDescription": matchData.matchDescription
	}
	db.collection("matches").updateOne({id: matchId}, {$set: updatedObj}, (err) => {
		if (err) console.log(err)
			else {
				res.redirect("/dashboard");
			}
	})
}