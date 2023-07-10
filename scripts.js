document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform verification
    if (username === "wilsonmore@gmail.com" && password === "wilson007") {
      // Redirect to another page
      window.location.href = "nextt.html";
    } else {
      document.getElementById("error").textContent = "Invalid username or password";
    }
     // Show logout container and start logout timer
     loginForm.reset();
     loginForm.style.display = 'none';
     logoutContainer.style.display = 'block';
 
     // Logout after 1 minute
     setTimeout(logout, 60000);
  });