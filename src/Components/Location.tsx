import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "450px",
};

const center = {
  lat: -12.046374, // Latitud de Lima, Perú
  lng: -77.042793, // Longitud de Lima, Perú
};

const options = {
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false,
};

export function Location() { // Asegúrate de que esté exportado como "Location"
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY; // Obtén la API Key desde las variables de entorno

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  if (loadError) {
    return <div>Error al cargar el mapa</div>;
  }

  if (!isLoaded) {
    return <div>Cargando mapa...</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <h2 className="text-2xl font-bold text-center mb-4">Ubicación</h2>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={14}
          center={center}
          options={options}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  );
}