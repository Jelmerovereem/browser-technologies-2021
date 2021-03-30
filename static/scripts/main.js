window.onload = () => {
	const allMatches = document.querySelectorAll(".matchesContainer>a>section");

	const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

	allMatches.forEach((el) => {
		let followEl = document.createElement("a"); // create element
		followEl.innerHTML = `<img src="assets/bookmark.svg" width="15" height="15" alt="">`;
		followEl.href = "javascript:void(0)";
		followEl.classList.add("followMatch"); // add class styling
		const matchid = el.dataset.matchid; // get matchid
		if (localStorage.getItem("followedMatches")) { // check if localstorage object is present
			const fMatches = JSON.parse(localStorage.getItem("followedMatches")); // get followed matches
			if (fMatches.indexOf(matchid) != -1) { // check if matchid is present in followed matches
				followEl.innerHTML = `<img src="assets/bookmarked.svg" width="15" height="15" alt="">`;
				//followEl.innerText = "Followed"; // change text
				followEl.classList.add("followed"); // add followed class
			}
		}
		followEl.dataset.matchid = matchid;
		followEl.addEventListener("click", () => {
			if (!localStorage.getItem("followedMatches")) { // check if localstroage object exists
				localStorage.setItem("followedMatches", JSON.stringify([matchid])); // create localstorage
				followEl.innerHTML = `<img src="assets/bookmarked.svg" width="15" height="15" alt="">`;
				followEl.classList.add("followed");
			} else {
				const followedMatches = JSON.parse(localStorage.getItem("followedMatches")); // get followed matches
				if (followedMatches.indexOf(matchid) == -1) { // if match is not present
					followedMatches.push(matchid); // add
					followEl.innerHTML = `<img src="assets/bookmarked.svg" width="15" height="15" alt="">`;
					followEl.classList.add("followed");
				} else { // if present
					const index = followedMatches.indexOf(matchid);
					followedMatches.splice(index, 1); // remove from localstorage
					followEl.innerHTML = `<img src="assets/bookmark.svg" width="15" height="15" alt="">`;
					followEl.classList.remove("followed");
				}
				localStorage.setItem("followedMatches", JSON.stringify(followedMatches)); // update localstorage
			}
		})
		el.appendChild(followEl);

		const dateTimeEl = el.querySelector(".dateTime");
		const dateTime = dateTimeEl.innerText;
		const dateTimeObj = new Date(dateTime);
		const hours = (dateTimeObj.getHours()<10 ? ("0" + dateTimeObj.getHours()) : dateTimeObj.getHours());
		const minutes = (dateTimeObj.getMinutes()<10 ? ("0" + dateTimeObj.getMinutes()) : dateTimeObj.getMinutes());
		const day = (dateTimeObj.getDate()<10 ? ("0"+ dateTimeObj.getDate()) : dateTimeObj.getDate());
		const month = months[dateTimeObj.getMonth()];
		const year = dateTimeObj.getFullYear();
		const dateString = `${day} ${month} ${year} - ${hours}:${minutes}`;
		dateTimeEl.innerText = dateString;
	})




	const myMatchesEl = document.querySelector(".myMatches");
	myMatchesEl.href = "/myMatches";
}