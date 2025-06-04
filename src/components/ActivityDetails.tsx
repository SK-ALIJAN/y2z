
import React from 'react';
import { ArrowLeft, MapPin, Star, Share, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Activity } from '@/types/itinerary';

interface ActivityDetailsProps {
  activity: Activity;
  onBack: () => void;
  onDelete: () => void;
  onShare: () => void;
}

const ActivityDetails: React.FC<ActivityDetailsProps> = ({ 
  activity, 
  onBack, 
  onDelete, 
  onShare 
}) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-lg font-bold text-pink-500">Y2Z TRAVEL</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={onShare}>
            <Share className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={onDelete} className="text-red-500">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Activity Image */}
      <div className="relative h-64 bg-gray-200">
        <img 
          src={activity.image} 
          alt={activity.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center gap-1">
          <Star className="w-3 h-3 text-yellow-400 fill-current" />
          <span className="text-xs font-medium">{activity.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{activity.name}</h1>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{activity.rating}</span>
            <span className="text-sm text-gray-500">({activity.reviewCount.toLocaleString()} reviews)</span>
          </div>
          <div className="flex items-center gap-1 text-green-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">View on Map</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">About</h2>
          <p className="text-gray-600 leading-relaxed">{activity.description}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Details</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Duration</span>
              <span className="text-gray-900">2-3 hours</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Best time to visit</span>
              <span className="text-gray-900">Morning</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Entry fee</span>
              <span className="text-gray-900">Free</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Location</h2>
          <div className="bg-gray-100 h-40 rounded-lg flex items-center justify-center">
            <img 
              src="/lovable-uploads/eb195928-0386-49fd-af98-102056d79f96.png" 
              alt="Map location"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
