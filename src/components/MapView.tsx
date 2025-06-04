import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Activity } from '@/types/itinerary';
import 'leaflet/dist/leaflet.css';

// Custom marker icon
const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface MapViewProps {
  selectedActivity: Activity | null;
  onClose: () => void;
  isMobile: boolean;
}

const MapView: React.FC<MapViewProps> = ({ selectedActivity, onClose, isMobile }) => {
  const lat = selectedActivity?.lat || 28.6139; // Fallback to Delhi
  const lng = selectedActivity?.lng || 77.2090;


  const mapContent = (
    <div className="w-full h-full z-0">
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        {selectedActivity && (
          <Marker position={[lat, lng]} icon={customIcon}>
            <Popup>
              <strong>{selectedActivity.name}</strong>
              <br />
              {selectedActivity.description}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );

  const activityInfo = selectedActivity && (
    <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg border z-10">
      <h3 className="font-semibold text-sm">{selectedActivity.name}</h3>
      <div className="flex items-center gap-1 mt-1">
        <span className="text-xs font-medium text-gray-700">{selectedActivity.rating}</span>
        <span className="text-yellow-400 text-xs">★</span>
        <span className="text-xs text-gray-500">
          ({selectedActivity.reviewCount.toLocaleString()})
        </span>
      </div>
      <p className="text-xs text-gray-600 mt-1 line-clamp-2">{selectedActivity.description}</p>
    </div>
  );

  if (isMobile) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Map View</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex-1 relative">{mapContent}</div>
        {activityInfo}
      </div>
    );
  }

  return (
    <div className="h-screen bg-white border-l border-gray-200 relative overflow-hidden">
      <div className="h-full relative">{mapContent}</div>
      {activityInfo}
    </div>
  );
};

export default MapView;
