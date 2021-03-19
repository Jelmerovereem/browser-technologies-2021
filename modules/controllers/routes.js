import { app } from "../../server.js";
import { renderAdminDashboard, renderAdminLogin, adminSignout, renderAddmatch, renderUserHome, renderEditMatch, renderUserMatch, renderProfile, userSignout } from "./renders.js";

export default function routes() {
	app
		.get("/admin", renderAdminLogin)
		.get("/dashboard", renderAdminDashboard)
		.get("/addMatch", renderAddmatch)
		.get("/admin/editMatch/:matchId", renderEditMatch)
		.get("/adminSignout", adminSignout)
		.get("/", renderUserHome)
		.get("/match/:matchId", renderUserMatch)
		.get("/profile", renderProfile)
		.get("/userSignout", userSignout)
}