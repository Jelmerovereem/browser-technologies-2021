const matchesContainer = document.querySelector(".matchesContainer");
const followMatches = JSON.parse(localStorage.getItem("followedMatches")) || [];
matches.forEach((match) => {
	if (followMatches.indexOf(match.id) != -1) {
		let matchHtml = `
			<a href="/match/${match.id}">
				<section data-matchId="${match.id}">
					<h2>${match.team1} ${match.team1Score} - ${match.team2Score} ${match.team2}</h2>
					<span class="dateTime">${match.dateTime}</span>
					<span>Comments: ${match.comments.length}</span>
				</section>
			</a>
		`;
		matchesContainer.insertAdjacentHTML("beforeend", matchHtml);
	}
})