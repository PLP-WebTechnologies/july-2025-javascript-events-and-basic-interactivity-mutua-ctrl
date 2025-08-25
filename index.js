<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Form</title>
    <style>
        /* Basic styling for the form */
        body { font-family: sans-serif; }
        .form-container { 
            width: 300px; 
            margin: 50px auto; 
            padding: 20px; 
            border: 1px solid #ccc; 
            border-radius: 8px; 
        }
        input { width: 100%; padding: 8px; margin-bottom: 10px; box-sizing: border-box; }
        button { width: 100%; padding: 10px; }
    </style>
</head>
<body>

    <!-- Main container for the form -->
    <div class="form-container">
        <h2>Contact</h2>
        
        <!-- The form calls the validateForm() function on submit -->
        <form onsubmit="return validateForm()">
            <!-- Name input field -->
            <label for="name">Name:</label>
            <input type="text" id="name" name="name">
            
            <!-- Email input field -->
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
            
            <!-- Submit button -->
            <button type="submit">Submit</button>
        </form>
    </div>

    <script>
        // The core JavaScript function to validate the form
        function validateForm() {
            // Get the values from the name and email input fields
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;

            // Check if the name field is empty
            if (name === "") {
                alert("Please enter your name.");
                return false; // Prevents form submission
            }

            // Check if the email field is empty
            if (email === "") {
                alert("Please enter your email.");
                return false; // Prevents form submission
            }

            // Simple check for a valid email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return false; // Prevents form submission
            }

            // If all checks pass, allow the form to submit
            return true;
        }
    </script>

</body>
</html>
