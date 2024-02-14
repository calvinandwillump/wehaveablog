document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    var password = document.getElementById("passwordInput").value;

    if (password === "Ladygaga1") {

        window.location.href = "https://www.wehaveablog.homepage";
    } else {

        document.getElementById("passwordInput").value = "";

        alert("Incorrect password. Please try again.");
    }
});
