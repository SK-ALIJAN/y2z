
import React, { useState } from 'react';
import ItineraryDay from '@/components/ItineraryDay';
import MapView from '@/components/MapView';
import ActivityDetails from '@/components/ActivityDetails';
import { mockItineraryData } from '@/data/mockData';
import { Activity } from '@/types/itinerary';

const Index = () => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [showMapModal, setShowMapModal] = useState(false);
  const [showDetailsPage, setShowDetailsPage] = useState(false);
  const [viewingActivity, setViewingActivity] = useState<Activity | null>(null);

  const handleActivitySelect = (activity: Activity) => {
    setSelectedActivity(activity);
  };

  const handleViewActivity = (activity: Activity) => {
    setViewingActivity(activity);
    setShowDetailsPage(true);
  };

  const handleDeleteActivity = (activityId: string) => {
    console.log('Delete activity:', activityId);
  };

  const handleShareActivity = (activity: Activity) => {
    console.log('Share activity:', activity);
  };

  if (showDetailsPage && viewingActivity) {
    return (
      <ActivityDetails
        activity={viewingActivity}
        onBack={() => setShowDetailsPage(false)}
        onDelete={() => handleDeleteActivity(viewingActivity.id)}
        onShare={() => handleShareActivity(viewingActivity)}
      />
    );
  }

  return (
    <>
      {/* Mobile Layout - Single Column */}
      <div className="lg:hidden min-h-screen bg-gray-100">
        <ItineraryDay
          dayData={mockItineraryData}
          onActivitySelect={handleActivitySelect}
          onMapClick={() => setShowMapModal(true)}
          onViewActivity={handleViewActivity}
          onDeleteActivity={handleDeleteActivity}
          onShareActivity={handleShareActivity}
        />
        {showMapModal && (
          <MapView
            selectedActivity={selectedActivity}
            onClose={() => setShowMapModal(false)}
            isMobile={true}
          />
        )}
      </div>

      {/* Desktop Layout - Split View */}
      <div className="hidden lg:flex min-h-screen bg-gray-100">
        <div className="w-1/2 border-r border-gray-200">
          <ItineraryDay
            dayData={mockItineraryData}
            onActivitySelect={handleActivitySelect}
            onMapClick={() => { }}
            onViewActivity={handleViewActivity}
            onDeleteActivity={handleDeleteActivity}
            onShareActivity={handleShareActivity}
          />
        </div>
        <div className="w-1/2">
          <MapView
            selectedActivity={selectedActivity}
            onClose={() => { }}
            isMobile={false}
          />
        </div>
      </div>
    </>
  );
};

export default Index;
