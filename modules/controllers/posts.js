import { app } from "../../server.js";
import authAndRespond from "../authAndRespond.js";
import adminCode from "../adminCode.js";
import addMatch from "../addMatch.js";
import editMatch from "../editMatch.js";
import removeMatch from "../removeMatch.js";
import postComment from "../postComment.js";
import userLogin from "../userLogin.js";
import postNewUser from "../postNewUser.js";
import removeComment from "../removeComment.js";

export default function posts() {
	app
		.post("/postAdminLogin", authAndRespond)
		.post("/postAdminCode", adminCode)
		.post("/addMatch", addMatch)
		.post("/editMatch", editMatch)
		.post("/removeMatch", removeMatch)
		.post("/addComment", postComment)
		.post("/postUserLogin", userLogin)
		.post("/postCreateUser", postNewUser)
		.post("/removeComment", removeComment)
}