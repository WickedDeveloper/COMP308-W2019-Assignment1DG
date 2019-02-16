// Name: David Gwyn
// Student #: 821 304 912
// Filename: app.js
// Date: 02/14/19

// IIFE - Immediately Invoked Function Expression
(function() {
    function Start() {
        console.log(`%c App Started...`,
        "font-size: 20px; color: blue; font-weight: bold;");
    }

    window.addEventListener("load", Start);
    
})();

// Called when send button is clicked, processes form data and sends alert to user
function processContactForm() {
    let firstName = document.getElementById("firstNameTextField").value;
    let lastName = document.getElementById("lastNameTextField").value;
    let email = document.getElementById("emailAddress").value;
    let message = document.getElementById("infoMessage").value;

    alert('Thank you ' + firstName  + ' ' + lastName + '. Your message ' + 
    'has been sent and your email address ' + email + ' has been copied on the note.');
}