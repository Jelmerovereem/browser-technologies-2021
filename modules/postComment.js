import { db } from "../server.js";
import { v4 as uuidv4 } from "uuid";

export default async function postComment(req, res) {
	const anonymousChoice = req.body.anonymous;
	const matchId = req.body.matchId;
	const user = () => {
		if (anonymousChoice === "on") {
			return "anonymous";
		} else {
			if (req.session.user) {
				return req.session.user.id;
			} else {
				return "guest";
			}
		}
	}
	const userName = () => {
		if (anonymousChoice === "on") {
			return "anonymous";
		} else {
			if (req.session.user) {
				return req.session.user.userName;
			} else {
				return "guest";
			}
		}
	}
	const commentObj = {
		id: uuidv4(),
		user: user(),
		userName: userName(),
		commentText: req.body.userComment,
		datePosted: new Date()
	}
	db.collection("matches").updateOne({id: matchId}, {$addToSet: {comments: commentObj}}, (err) => {
		if (err) console.log(err)
			else {
				res.redirect(`/match/${matchId}`);
			}
	})
}