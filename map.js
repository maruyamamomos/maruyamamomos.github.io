// This function will be called by the Google Maps API script
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("googleMap"), {
    zoom: 18, // the smaller the compact view
    center: { lat: 37.459637, lng: 126.950372 }, // position: 학생회관식당(63) 우측 출구
    mapId: "TJV_MAP_ID",  
  });
  
  // Create images and markers
  const locations = [
    { position: { lat: 37.460365, lng: 126.95296 } },
    { position: { lat: 37.466000, lng: 126.96100 } },
    { position: { lat: 37.459770, lng: 126.95031 } },
    { position: { lat: 37.458334, lng: 126.95304 } },
    { position: { lat: 37.459198, lng: 126.95225 } },
    { position: { lat: 37.459637, lng: 126.95037 } },
    { position: { lat: 37.459522, lng: 126.95071 } },
    { position: { lat: 37.459411, lng: 126.95062 } },
    { position: { lat: 37.465170, lng: 126.95155 } },
    { position: { lat: 37.463515, lng: 126.94962 } },
    { position: { lat: 37.467199, lng: 126.95225 } },
    { position: { lat: 37.467197, lng: 126.95225 } },
    { position: { lat: 37.466406, lng: 126.95285 } },
    { position: { lat: 37.468113, lng: 126.95303 } },
    { position: { lat: 37.463132, lng: 126.95222 } },
    { position: { lat: 37.462901, lng: 126.95178 } },
    { position: { lat: 37.464226, lng: 126.95412 } },
    { position: { lat: 37.464734, lng: 126.95478 } },
    { position: { lat: 37.463747, lng: 126.95424 } },
    { position: { lat: 37.465082, lng: 126.95367 } },
    { position: { lat: 37.450206, lng: 126.95249 } },
    { position: { lat: 37.448733, lng: 126.95249 } },
    { position: { lat: 37.448822, lng: 126.95169 } },
    { position: { lat: 37.451865, lng: 126.95248 } },
    { position: { lat: 37.457633, lng: 126.94870 } },
    { position: { lat: 37.457634, lng: 126.94870 } },
    { position: { lat: 37.459639, lng: 126.94816 } },
    { position: { lat: 37.458728, lng: 126.94837 } },
    { position: { lat: 37.460141, lng: 126.94856 } },
    { position: { lat: 37.457710, lng: 126.95131 } },
    { position: { lat: 37.457674, lng: 126.95404 } },
    { position: { lat: 37.455199, lng: 126.95202 } },
    { position: { lat: 37.465911, lng: 126.96098 } },
    { position: { lat: 37.464734, lng: 126.95981 } },
    { position: { lat: 37.455502, lng: 126.95146 } },
    { position: { lat: 37.454916, lng: 126.95152 } },
    { position: { lat: 37.454834, lng: 126.95297 } },
    { position: { lat: 37.454344, lng: 126.95038 } },

  ];
  
  locations.forEach(loc => {
    const imageElement = document.createElement('img');
    imageElement.src = 'image/tjv.png';
    imageElement.style.width = '25px';
    imageElement.style.height = '25px';

    const marker = new AdvancedMarkerElement({
      position: loc.position, 
      content: imageElement,
      map: map
    });

  });
};
