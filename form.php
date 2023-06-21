<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the form data
    $email = $_POST["email"];
    $name = $_POST["fname"];

    // Validate the form data
    if (empty($email) || empty($name)) {
        echo "Please fill in all fields.";
    } else {
        // Process the form data as needed
        // For example, you can store the data in a database or send it via email
        echo "Form data received successfully!";
    }
}
?>