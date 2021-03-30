window.onload = () => {
	const allMatches = document.querySelectorAll(".matchesContainer>a>section");

	const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	
	allMatches.forEach((el) => {
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
}