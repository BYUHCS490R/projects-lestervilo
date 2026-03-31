document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name").value;
    const emailInput = document.getElementById("email").value;
    const categoryInput = document.getElementById("category").value;
    const descriptionInput = document.getElementById("description").value;

    if (nameInput === "" || emailInput === "" || categoryInput === "") {
        alert("Please fill in your Name, Email, and select a Category.");
        return;
    }

    if (descriptionInput.length < 10) {
        alert("Please provide a description with at least 10 characters so we can better assist you.");
        return; 
    }

    const formData = {
        name: nameInput,
        email: emailInput,
        category: categoryInput,
        description: descriptionInput
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
            document.getElementById("message").innerText = response.message;
            document.getElementById("myForm").reset();
        } else {
            alert("There was an error submitting the form.");
        }
    };

    xhr.send(JSON.stringify(formData));
});