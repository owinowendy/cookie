document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById('cookie-popup');
    const acceptBtn = document.getElementById('accept-btn');
  
    // Check if the user has already accepted the cookies
    if (!localStorage.getItem('cookieAccepted')) {
      // Show the popup
      popup.classList.add('show');
    }
  
    // Event listener for the "Accept" button
    acceptBtn.addEventListener('click', function() {
      // Hide the popup
      popup.classList.remove('show');
      
      // Store the user's consent in localStorage
      localStorage.setItem('cookieAccepted', 'true');
    });
  });
  