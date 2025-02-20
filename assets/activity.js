document.addEventListener('DOMContentLoaded', () => {
    const activityContainer = document.getElementById('live-activity');

    // Updated array with freelance services using only major cities or countries.
    const activities = [
        { name: "Tigist Gebre", location: "Addis Ababa", action: "just booked a VFX consultation", lastVisited: "5 hours ago" },
        { name: "Yohannes Assefa", location: "Cape Town", action: "just ordered a video editing package", lastVisited: "last night" },
        { name: "Frehiwot Bekele", location: "Australia", action: "is exploring a motion graphics project", lastVisited: "last week" },
        { name: "Bereket Tesfaye", location: "Dubai", action: "just signed up for custom graphics design", lastVisited: "last month" },
        { name: "Selamawit Assefa", location: "Addis Ababa", action: "just booked a video editing session", lastVisited: "3 hours ago" },
        { name: "Amanuel Haile", location: "Cape Town", action: "is checking out a VFX service", lastVisited: "yesterday" },
        { name: "Kidist Mekuria", location: "Australia", action: "just ordered custom graphics design", lastVisited: "2 days ago" },
        { name: "Abebe Fikadu", location: "Addis Ababa", action: "just booked a motion graphics consultation", lastVisited: "4 hours ago" },
        { name: "Ruth Desta", location: "Dubai", action: "is exploring a video editing project", lastVisited: "last week" },
        { name: "Samuel Tsegaye", location: "Cape Town", action: "just signed up for VFX services", lastVisited: "6 hours ago" }
    ];

    // Function to update live activity
    function updateLiveActivity() {
        // Randomly select an activity from the array
        const randomActivity = activities[Math.floor(Math.random() * activities.length)];
        const message = `${randomActivity.name} from ${randomActivity.location} ${randomActivity.action}. Last visited: ${randomActivity.lastVisited}.`;
        
        // Create a new element for the activity
        const activityItem = document.createElement('div');
        activityItem.className = 'live-activity-item';
        activityItem.textContent = message;
        
        // Append to the container
        activityContainer.appendChild(activityItem);
        
        // Remove the activity after 15 seconds to prevent clutter
        setTimeout(() => {
            if (activityContainer.contains(activityItem)) {
                activityContainer.removeChild(activityItem);
            }
        }, 15000);
    }

    // Update live activity every 12 seconds as an average interval
    setInterval(() => {
        updateLiveActivity();
    }, 12000);
});
