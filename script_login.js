document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    var password = document.getElementById("passwordInput").value;

    if (password === "Ladygaga1") {

        document.location.href = "homepage.html";
    } else {

        document.getElementById("passwordInput").value = "";

        alert("Incorrect password. Please try again.");
    }
});
