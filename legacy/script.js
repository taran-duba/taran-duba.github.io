function sendEmail() {
	Email.send({
	    Host: "smtp.gmail.com",
	    Username : "tkduba19@gmail.com",
	    Password : "Taran!903",
	    To : "tkduba19@gmail.com",
	    From : "tkduba19@gmail.com",
	    Subject : "Sales Request",
	    Body : body,
	}).then(
		message => alert("mail sent successfully")
	);
}