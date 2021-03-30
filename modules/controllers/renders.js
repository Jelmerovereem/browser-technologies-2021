import { db } from "../../server.js";

function renderAdminLogin(req, res) {
	if (!req.session.admin) {
		res.render("adminLogin.ejs");
	} else {
		res.redirect("/dashboard");
	}
}

async function renderAdminDashboard(req, res) {
	if (!req.session.admin) {
		res.redirect("/admin")
	} else {
		const matches = await db.collection("matches").find().toArray();
		const adminData = req.session.admin;
		res.render("adminDashboard.ejs", {
			adminData,
			matches
		});
	}
}

function renderAddmatch(req, res) {
	if (!req.session.admin) {
		res.redirect("/admin")
	} else {
		const adminData = req.session.admin;
		res.render("addMatch.ejs", {
			adminData
		});
	}
}

async function renderEditMatch(req, res) {
	if (!req.session.admin) {
		res.redirect("/admin")
	} else {
		const matchId = req.params.matchId;
		const match = await db.collection("matches").findOne({id: matchId});
		res.render("editMatch.ejs", {
			match
		})
	}
}

function adminSignout(req, res) {
	req.session.admin = "";
	res.redirect("/admin");
}

async function renderUserHome(req, res) {
	const matches = await db.collection("matches").find().toArray();
	res.render("userHome.ejs", {
		matches
	})
}

async function renderMyMatches(req, res) {
	const matches = await db.collection("matches").find().toArray();
	res.render("myMatches.ejs", {
		matches
	})
}

async function renderUserMatch(req, res) {
	const matchId = req.params.matchId;
	const match = await db.collection("matches").findOne({id: matchId});
	res.render("detailMatch.ejs", {
		match
	})
}

async function renderProfile(req, res) {
	if (!req.session.user) {
		res.render("userLogin.ejs");
	} else {
		const profile = req.session.user;
		res.render("profile.ejs", {
			profile
		})
	}
}

function userSignout(req, res) {
	req.session.user = "";
	res.redirect("/profile");
}

export { renderAdminLogin, renderAdminDashboard, adminSignout, renderAddmatch, renderUserHome, renderEditMatch, renderMyMatches, renderUserMatch, renderProfile, userSignout }