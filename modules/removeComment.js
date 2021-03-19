import { db } from "../server.js";

export default async function removeComment(req, res) {
	const matchId = req.body.matchId;
	const commentId = req.body.commentId;
	const match = await db.collection("matches").findOne({id: matchId});
	const commentIndex = match.comments.findIndex(obj => obj.id === commentId);
	db.collection("matches").updateOne({id: matchId}, {$pull: {comments: {id: commentId}}}, (err) => {
		if(err) console.log(err)
			else {
				res.redirect(`/admin/editMatch/${matchId}`);
			}
	})
}