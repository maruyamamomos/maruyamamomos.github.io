// Initialize the map
const map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: 37.459670, lng: 126.950317 },
    zoom: 17,
    mapId: "TJV_MAP_ID",
  });
  
  // Data for multiple markers
  const markerData = [
    { position: { lat: 37.459770, lng: 126.950317 }, title: "TJV Marker 1" },
    { position: { lat: 37.459670, lng: 126.950417 }, title: "TJV Marker 2" },
    { position: { lat: 37.459570, lng: 126.950517 }, title: "TJV Marker 3" },
  ];
  
  // Function to create custom pins and markers
  function createCustomMarker(position, title) {
    // Create a Font Awesome icon for the marker
    const icon = document.createElement("div");
    icon.innerHTML = '<i class="fa fa-map-marker fa-lg"></i>';
  
    const customPin = new google.maps.marker.PinElement({
      glyph: icon,
      glyphColor: "#007BFF",
      background: "#FFD514",
      borderColor: "#007BFF",
    });
  
    // Create the marker
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map: map,
      position: position,
      content: customPin.element,
      title: title,
    });
  
    // Add a click listener for this marker
    const infoWindow = new google.maps.InfoWindow();
    marker.addListener("click", () => {
      infoWindow.close(); // Close any previously opened info window
      infoWindow.setContent(title); // Set the title in the info window
      infoWindow.open(map, marker); // Open the info window on the current marker
    });
  
    return marker;
  }
  
  // Loop through the marker data to create multiple pins
  markerData.forEach((data) => {
    createCustomMarker(data.position, data.title);
  });
  