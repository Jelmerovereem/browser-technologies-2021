window.onload = () => {
	const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	
	const dateEl = document.querySelector(".dateTime");
	const date = new Date(dateEl.innerText);
	const dateHrs = (date.getHours()<10 ? ("0" + date.getHours()) : date.getHours());
	const dateMins = (date.getMinutes()<10 ? ("0" + date.getMinutes()) : date.getMinutes());
	const dateDay = (date.getDate()<10 ? ("0"+ date.getDate()) : date.getDate());
	const dateMonth = months[date.getMonth()];
	const dateYear = date.getFullYear();
	const dateText = `${dateDay} ${dateMonth} ${dateYear} - ${dateHrs}:${dateMins}`;
	dateEl.innerText = dateText;

	const allDates = document.querySelectorAll(".commentDate");


	allDates.forEach(el => {
		const dateTimeObj = new Date(el.innerText);
		const hours = (dateTimeObj.getHours()<10 ? ("0" + dateTimeObj.getHours()) : dateTimeObj.getHours());
		const minutes = (dateTimeObj.getMinutes()<10 ? ("0" + dateTimeObj.getMinutes()) : dateTimeObj.getMinutes());
		const day = (dateTimeObj.getDate()<10 ? ("0"+ dateTimeObj.getDate()) : dateTimeObj.getDate());
		const month = months[dateTimeObj.getMonth()];
		const year = dateTimeObj.getFullYear();
		const dateString = `${day} ${month} ${year} - ${hours}:${minutes}`;
		el.innerText = dateString;
	})
}