document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name").value;
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;
    const age = document.getElementById("age").value;

    if (nameInput === "" || emailInput === "" || passwordInput === "") {
        alert("Please fill in all required fields.");
        return;
    }

    if (!age || age <18) {
        alert("You must be at least 18 years old to submit this form.");
        return;
    }

    const formData = {
        name: nameInput,
        email: emailInput,
        password: passwordInput
    };

    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Form submitted successfully!");
            const response = JSON.parse(xhr.responseText);
            console.log("Response:", response);
            document.getElementById("myForm").innerHTML = "";
            document.getElementById("message").innerText = response.message;
        }
        else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };
    xhr.send(JSON.stringify(formData));
});

