// // Initialize the map
// const map = new google.maps.Map(document.getElementById("googleMap"), {
//     center: { lat: 37.459670, lng: 126.950317 },
//     zoom: 14,
//     mapId: "TJV_MAP_ID",
//   });
  
//   // Data for multiple markers
//   const markerData = [
//     { position: { lat: 37.459770, lng: 126.950317 }, title: "학생회관 식당 출구" },
//     { position: { lat: 37.458951, lng: 126.951973 }, title: "중도 씨유" },
//     { position: { lat: 37.459735, lng: 126.954946 }, title: "사범대 12동 마당쪽" },
//   ];
  
//   // Function to create custom pins and markers
//   function createCustomMarker(position, title) {
//     // Create a Font Awesome icon for the marker
//     const icon = document.createElement("div");
//     icon.innerHTML = '<i class="fa fa-map-marker fa-lg"></i>';
  
//     const customPin = new google.maps.marker.PinElement({
//       glyph: icon,
//       glyphColor: "#007BFF",
//       background: "#FFD514",
//       borderColor: "#007BFF",
//     });
  
//     // Create the marker
//     const marker = new google.maps.marker.AdvancedMarkerElement({
//       map: map,
//       position: position,
//       content: customPin.element,
//       title: title,
//     });
  
//     // Add a click listener for this marker
//     const infoWindow = new google.maps.InfoWindow();
//     marker.addListener("click", () => {
//       infoWindow.close(); // Close any previously opened info window
//       infoWindow.setContent(title); // Set the title in the info window
//       infoWindow.open(map, marker); // Open the info window on the current marker
//     });
  
//     return marker;
//   }
  
//   // Loop through the marker data to create multiple pins
//   markerData.forEach((data) => {
//     createCustomMarker(data.position, data.title);
//   });
  



// This function will be called by the Google Maps API script
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // Get the map
  map = new Map(document.getElementById("googleMap"), {
    zoom: 27, // Initial zoom level
    center: { lat: 37.459522, lng: 126.950717 }, // position: 학생회관식당(63) 우측 출구
    mapId: "TJV_MAP_ID",  
  });
  
  // Create images and markers
  const locations = [
    { position: { lat: 37.459637, lng: 126.950372 } },
    { position: { lat: 37.459198, lng: 126.952256 } },
    { position: { lat: 37.459522, lng: 126.950717 } },
    { position: { lat: 37.459411, lng: 126.950623 } },
    { position: { lat: 37.465170, lng: 126.951551 } },
    { position: { lat: 37.463515, lng: 126.949625 } },
    { position: { lat: 37.466000, lng: 126.961000 } },
    { position: { lat: 37.467199, lng: 126.952254 } },
    { position: { lat: 37.463132, lng: 126.952220 } },
    { position: { lat: 37.462901, lng: 126.951789 } },
    { position: { lat: 37.466406, lng: 126.952854 } },
    { position: { lat: 37.464226, lng: 126.954129 } },
    { position: { lat: 37.459770, lng: 126.950317 } },
    { position: { lat: 37.460365, lng: 126.952963 } }
  ];
  
  locations.forEach(loc => {
    const imageElement = document.createElement('img');
    imageElement.src = 'tjv.png';
    imageElement.style.width = '25px';
    imageElement.style.height = '25px';

    const marker = new AdvancedMarkerElement({
      position: loc.position, 
      content: imageElement,
      map: map
    });

  });
};

// const beachFlagImg = document.createElement('img');
// beachFlagImg.src = 'tjv.png';
// const beachFlagMarker = new Marker3DElement({
//     position: { lat: 37.460365, lng: 126.952963 },  content: imageElement, map: map
// });
// const templateForImg = document.createElement('template');
// templateForImg.content.append(beachFlagImg);
// beachFlagMarker.append(templateForImg);
// map.append(beachFlagMarker);