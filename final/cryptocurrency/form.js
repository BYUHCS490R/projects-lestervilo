document.getElementById("contactform").addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name").value;
    const emailInput = document.getElementById("email").value;
    const messageInput = document.getElementById("message").value;

    if (nameInput === "" || emailInput === "" || messageInput === "") {
        alert("Please fill in your Name, Email, and Message.");
        return;
    }

    if (messageInput.length < 10) {
        alert("Please provide a message with at least 10 characters so we can better assist you.");
        return;
    }

    const formData = {
        name: nameInput,
        email: emailInput,
        message: messageInput
    };

    console.log("Form Data Collected:", formData);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert("Form submitted successfully!");
            const response = JSON.parse(xhr.responseText);
            console.log("Server Response:", response);
            document.getElementById("responseMessage").innerText = response.message;
            document.getElementById("contactform").reset();
        } else {
            alert("There was an error submitting the form.");
        }
    };

    xhr.send(JSON.stringify(formData));
});