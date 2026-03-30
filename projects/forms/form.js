document.getElementById("myForm").addEventListener("submit", function(event) {
    // 1. Prevent the form from submitting normally
    event.preventDefault();

    // 2. Collect inputs based on the actual IDs in your HTML
    const nameInput = document.getElementById("name").value;
    const emailInput = document.getElementById("email").value;
    const categoryInput = document.getElementById("category").value;
    const descriptionInput = document.getElementById("description").value;

    // 3. Validation: Check at least 3 inputs to make sure a value is present
    if (nameInput === "" || emailInput === "" || categoryInput === "") {
        alert("Please fill in your Name, Email, and select a Category.");
        return; // Stops the function if there is an error
    }

    // 4. Validation: Check the length of a text field
    if (descriptionInput.length < 10) {
        alert("Please provide a description with at least 10 characters so we can better assist you.");
        return; 
    }

    // 5. Collect everything into a single Object
    const formData = {
        name: nameInput,
        email: emailInput,
        category: categoryInput,
        description: descriptionInput
    };

    // 6. Log the object to the console
    console.log("Form Data Collected:", formData);

    // 7. AJAX Call using XHR
    const xhr = new XMLHttpRequest();
    
    // Using "GET" to fetch the mock JSON file (required for GitHub Pages)
    xhr.open("GET", "submit.json", true);
    
    xhr.onload = function() {
        // If the request is successful
        if (xhr.status === 200) {
            alert("Form submitted successfully!");
            
            // Parse the JSON response
            const response = JSON.parse(xhr.responseText);
            console.log("Server Response:", response);
            
            // Display the message on the page
            document.getElementById("message").innerText = response.message;
            
            // Modify the form: Reset all fields to blank
            document.getElementById("myForm").reset();
        } else {
            alert("There was an error submitting the form.");
        }
    };

    // Send the request
    xhr.send();
});