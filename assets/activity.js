document.addEventListener('DOMContentLoaded', () => {
    const activityContainer = document.getElementById('live-activity');

    // Your contact details
    const contactInfo = {
        email: "BiniyamGetachew1001@gmail.com",
        phone: "+251 988 00 1001"
    };

    // Function to display contact popup
    function updateContactPopup() {
        // Create a new element for the popup
        const popup = document.createElement('div');
        popup.className = 'live-activity-item'; // Adjust or add additional styles as needed
        
        // Set innerHTML with line breaks for separate lines
        popup.innerHTML = `contact<br>Email: ${contactInfo.email}<br>Phone: ${contactInfo.phone}`;
        
        // Append to the container
        activityContainer.appendChild(popup);
        
        // Remove the popup after 15 seconds to prevent clutter
        setTimeout(() => {
            if (activityContainer.contains(popup)) {
                activityContainer.removeChild(popup);
            }
        }, 15000);
    }

    // Update contact popup every 12 seconds
    setInterval(() => {
        updateContactPopup();
    }, 12000);
});
