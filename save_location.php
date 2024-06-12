<?php
// Get the location data from the POST request
$locationData = file_get_contents('php://input');

// Write the location data to "location.json"
file_put_contents('location.json', $locationData);

// Optionally, you can send a response back to the client
http_response_code(200);
echo "Location data saved successfully.";
?>
