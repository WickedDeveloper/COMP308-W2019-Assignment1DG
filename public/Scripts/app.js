// IIFE - Immediately Invoked Function Expression
(function() {
    function Start() {
        console.log(`%c App Started...`,
        "font-size: 20px; color: blue; font-weight: bold;");
    }

    window.addEventListener("load", Start);
    
})();

function processContactForm() {
    let firstName = document.getElementById("firstNameTextField").value;
    let lastName = document.getElementById("lastNameTextField").value;
    let email = document.getElementById("emailAddress").value;
    let message = document.getElementById("infoMessage").value;

    alert('Thank you ' + firstName  + ' ' + lastName + '. Your message ' + 
    'has been sent and your email address ' + email + ' has been copied on the note.');
}