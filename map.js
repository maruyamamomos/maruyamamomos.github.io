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
  



// Declare map variable in the global scope
let map;

// This function will be called by the Google Maps API script
function initMap() {
  // The location to center the map on (e.g., Seoul)
  const initialLocation = { lat: 37.459670, lng: 126.950317 };

  // Create a new map instance and attach it to the 'googleMap' div
  map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 20, // Initial zoom level
    center: initialLocation,  
    mapId: "TJV_MAP_ID",
  });

  // Create images
  const imageElement = document.createElement('img');
  imageElement.src = 'tjv.png'

  // Create markers
  const { AdvancedMarkerElement } = new google.maps.importLibrary("marker");
  const marker = new AdvancedMarkerElement(
    { position: { lat: 37.460365, lng: 126.952963 }, title: '인문대 인문관2(2) 2층 휴게공간', content: imageElement, map: map },
    { position: { lat: 37.459770, lng: 126.950317 }, title: '제3식당(75-1)', content: imageElement, map: map }
  )

}

// const beachFlagImg = document.createElement('img');
// beachFlagImg.src = 'tjv.png';
// const beachFlagMarker = new Marker3DElement({
//     position: { lat: 37.460365, lng: 126.952963 },  content: imageElement, map: map
// });
// const templateForImg = document.createElement('template');
// templateForImg.content.append(beachFlagImg);
// beachFlagMarker.append(templateForImg);
// map.append(beachFlagMarker);