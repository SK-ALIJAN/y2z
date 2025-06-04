
import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { ItineraryDay as ItineraryDayType, Activity } from '@/types/itinerary';
import DraggableActivityCard from './DraggableActivityCard';
import { Button } from '@/components/ui/button';
import { AlignJustify, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface ItineraryDayProps {
  dayData: ItineraryDayType;
  onActivitySelect?: (activity: Activity) => void;
  onMapClick?: () => void;
  onViewActivity?: (activity: Activity) => void;
  onDeleteActivity?: (activityId: string) => void;
  onShareActivity?: (activity: Activity) => void;
}

const ItineraryDay: React.FC<ItineraryDayProps> = ({
  dayData,
  onActivitySelect,
  onMapClick,
  onViewActivity,
  onDeleteActivity,
  onShareActivity
}) => {
  const [activities, setActivities] = useState(dayData.activities);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setActivities((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleDeleteActivity = (activityId: string) => {
    setActivities(prev => prev.filter(activity => activity.id !== activityId));
    onDeleteActivity?.(activityId);
  };

  return (
    <div className="h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-bold text-pink-500">Y2Z TRAVEL</h1>
        </div>

        <div className="lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="p-1">
                <AlignJustify className="w-5 h-5 text-gray-600" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-white border shadow-lg">
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>Share Itinerary</DropdownMenuItem>
              <DropdownMenuItem>Export</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

      </div>

      {/* Itinerary Header */}
      <div className="px-4 py-3 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900">Itinerary</h2>
        <p className="text-sm text-gray-500">{dayData.title}</p>
      </div>

      {/* Activities List */}
      <div className="flex-1 overflow-y-auto px-4 py-2">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={activities.map(a => a.id)} strategy={verticalListSortingStrategy}>
            {activities.map((activity, index) => (
              <DraggableActivityCard
                key={activity.id}
                activity={activity}
                index={index}
                onSelect={() => onActivitySelect?.(activity)}
                onDelete={() => handleDeleteActivity(activity.id)}
                onView={() => onViewActivity?.(activity)}
                onShare={() => onShareActivity?.(activity)}
              />
            ))}
          </SortableContext>
        </DndContext>



      </div>


      

      {/* Maps Button - Only show on mobile */}
      <div className="p-4 border-t border-gray-100 lg:hidden">
        <Button
          onClick={onMapClick}
          className="w-full bg-gray-800 hover:bg-gray-900 text-white rounded-lg py-3 font-medium flex items-center justify-center gap-2"
        >
          🗺️ MAPS
        </Button>
      </div>
    </div>
  );
};

export default ItineraryDay;
