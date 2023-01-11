const inputFields = document.querySelectorAll(".contactFormInputs");
const errorMessages = document.querySelectorAll(".contactFormField > small");
const contactForm = document.getElementById("contactFormFields");

contactForm.addEventListener("submit", (e) => {
	e.preventDefault();
	let errorSomewhere = false;
	//clear
	errorMessages.forEach((errorMessage) => {
		errorMessage.innerText = "";
	});
	inputFields.forEach((input) => input.classList.remove("verifyInput"));

	//errors
	inputFields.forEach((input, inputIndex) => {
		if (input.value === "") {
			errorMessages[inputIndex].innerText = "Campo obrigatório";
			input.classList.add("verifyInput");
			errorSomewhere = true;
		}
	});

    //submit
	if (!errorSomewhere) {
		//For demo usage, the line below sends the message to the same number as the user input phone number. To work, must include country code and full number. Change the target below for real usage.
		let targetWhatsappNumber = contactForm.querySelector("#phoneInput").value;

		let targetUrl = "http://wa.me/" + targetWhatsappNumber + "?text=Olá, meu nome é " + contactForm.querySelector("#fullNameInput").value + ". Email: " + contactForm.querySelector("#emailInput").value + " Telefone: " + contactForm.querySelector("#phoneInput").value + ". " + contactForm.querySelector("#messageInput").value;
		window.open(targetUrl, "_blank");
	}
});

inputFields.forEach((input) => {
	input.addEventListener("change", () => {
		if (input.value !== "") {
			input.classList.add("okayInput");
		} else {
			input.classList.remove("okayInput");
		}
	});
});
