document.addEventListener("DOMContentLoaded", function () {

    // CONTACT FORM
    const contactForm = document.getElementById("contactform");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const data = {
            name: document.getElementById("name").value,
            message: document.getElementById("message").value,
            date: new Date().toLocaleString()
        };

        let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
        contacts.push(data);
        localStorage.setItem("contacts", JSON.stringify(contacts));

        alert("Message sent!");
        contactForm.reset();
    });

    // NEWSLETTER FORM
    const newsletterForm = document.getElementById("newsletter");

    newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const data = {
            email: document.getElementById("email").value,
            date: new Date().toLocaleString()
        };

        let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];
        subscribers.push(data);
        localStorage.setItem("subscribers", JSON.stringify(subscribers));

        alert("Subscribed successfully!");
        newsletterForm.reset();
    });

});