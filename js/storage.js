// storage.js
function storeSubmission(form) {
    const formData = new FormData(form);
    const submission = {};
    
    formData.forEach((value, key) => {
        submission[key] = value;
    });
    
    // Add timestamp
    submission.timestamp = new Date().toISOString();
    
    // Get existing submissions
    let submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
    
    // Add new submission
    submissions.push(submission);
    
    // Store updated submissions
    localStorage.setItem('submissions', JSON.stringify(submissions));
}

// Function to get all submissions
function getSubmissions() {
    return JSON.parse(localStorage.getItem('submissions') || '[]');
}

// Function to display submissions
function displaySubmissions() {
    const submissions = getSubmissions();
    const container = document.getElementById('submissions-container');
    
    if (!container) return;
    
    container.innerHTML = submissions.map(sub => `
        <div class="submission">
            <p><strong>Area:</strong> ${sub['entry.areaName']}</p>
            <p><strong>Customer:</strong> ${sub['entry.customerName']}</p>
            <p><strong>Mobile:</strong> ${sub['entry.mobileNumber']}</p>
            <p><strong>Sale Made:</strong> ${sub['entry.saleMade']}</p>
            <p><small>Submitted: ${new Date(sub.timestamp).toLocaleString()}</small></p>
        </div>
    `).join('');
}
