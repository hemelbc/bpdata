// formValidation.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    // Form validation
    form.addEventListener('submit', function(e) {
        const mobileNumber = document.querySelector('input[type="text"][pattern]').value;
        if (!/^\d{10}$/.test(mobileNumber)) {
            alert('Please enter a valid 10-digit mobile number');
            e.preventDefault();
            return;
        }

        // Store the submission
        storeSubmission(this);
    });

    // Show success message if form was submitted
    if (window.location.search.includes('submitted=true')) {
        alert('Form submitted successfully!');
    }
});
