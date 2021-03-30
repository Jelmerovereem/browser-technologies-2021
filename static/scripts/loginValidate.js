const loginForm = document.querySelector(".adminLoginForm");
const loginBtn = loginForm.querySelector("button");
const userNameInput = document.querySelector("#userName");
const passwordInput = document.querySelector("#password");

const userNameErr = document.querySelector(".username-err");
const passwordErr = document.querySelector(".password-err");

function cleanInput(input, err) {
	input.style.borderColor = "black";
	err.innerText = "";
}

cleanInput(userNameInput, userNameErr);
cleanInput(passwordInput, passwordErr)

const inputs = [userNameInput, passwordInput];
inputs.forEach(el => {
	el.addEventListener("change", () => {
		if (el.value != "" && el === userNameInput) {
			cleanInput(el, userNameErr);
		} else if (el.value === "" && el === userNameInput) {
			userNameErr.innerText = "Please fill in an username";
			userNameInput.style.borderColor = "red";
		}
		if (el.value != "" && el === passwordInput) {
			cleanInput(el, passwordErr)
		} else if (el.value === "" && el === passwordInput) {
			passwordErr.innerText = "Please fill in a password";
			passwordInput.style.borderColor = "red";
		} 
		
	})
})

let checkedUsername = false;
let checkedPassword = false;

function checkInputs() {
	if (userNameInput.value === "") {
		userNameErr.innerText = "Please fill in an username";
		userNameInput.style.borderColor = "red";
	} else {
		cleanInput(userNameInput, userNameErr);
		checkedUsername = true;
	}

	if (passwordInput.value === "") {
		passwordErr.innerText = "Please fill in a password";
		passwordInput.style.borderColor = "red";
	} else {
		cleanInput(passwordInput, passwordErr);
		checkedPassword = true;
	}
}

loginBtn.addEventListener("click", (event) => {
	event.preventDefault();
	checkInputs();
	if (checkedUsername && checkedPassword) {
		loginForm.submit();
	}
})