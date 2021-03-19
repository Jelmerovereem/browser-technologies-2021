import { db } from "../server.js";
import { v4 as uuidv4 } from "uuid";

export default async function addMatch(req, res) {
	const matchData = req.body;
	const inserted = await db.collection("matches").insertOne({
		"id": uuidv4(),
		"dateTime": matchData.dateTime,
		"team1": matchData.team1,
		"team1Score": matchData.team1Score,
		"team2": matchData.team2,
		"team2Score": matchData.team2Score,
		"matchDescription": matchData.matchDescription,
		"comments": []
	})
	if (inserted.result.ok === 1) {
		res.redirect("/dashboard");
	} else {
		res.redirect("/addMatch")
	}
}