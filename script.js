check = (email) => {
	var emailBox = document.getElementById("email");
	var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (email.match(mailFormat)) {
		emailBox.style.border = "thin solid green";
	} else {
		emailBox.style.border = "thin solid red";
	}
};
function validate() {
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
     console.log(email+password);
     document.getElementById("container").innerHTML = "<h1>Email: </h1>" + email + "<h1>Password: </h1>" + password ;
}
