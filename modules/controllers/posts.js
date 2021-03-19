import { app } from "../../server.js";
import authAndRespond from "../authAndRespond.js";
import addMatch from "../addMatch.js";
import editMatch from "../editMatch.js";
import postComment from "../postComment.js";
import userLogin from "../userLogin.js";
import postNewUser from "../postNewUser.js";
import removeComment from "../removeComment.js";

export default function posts() {
	app
		.post("/postAdminLogin", authAndRespond)
		.post("/addMatch", addMatch)
		.post("/editMatch", editMatch)
		.post("/addComment", postComment)
		.post("/postUserLogin", userLogin)
		.post("/postCreateUser", postNewUser)
		.post("/removeComment", removeComment)
}