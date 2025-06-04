
import React, { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Activity } from '@/types/itinerary';
import { MapPin, Trash2, MoreHorizontal, Eye, Share, Equal } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DraggableActivityCardProps {
  activity: Activity;
  index: number;
  onSelect?: () => void;
  onDelete?: () => void;
  onView?: () => void;
  onShare?: () => void;
}

const DraggableActivityCard: React.FC<DraggableActivityCardProps> = ({
  activity,
  index,
  onSelect,
  onDelete,
  onView,
  onShare
}) => {
  const [showHoverMenu, setShowHoverMenu] = useState(false);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: activity.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`mb-3 ${isDragging ? 'opacity-50 z-50' : ''}`}
      onMouseEnter={() => setShowHoverMenu(true)}
      onMouseLeave={() => setShowHoverMenu(false)}
    >
      <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-sm transition-shadow relative">
        <div className="flex items-start gap-3">
          {/* Order number */}

          <div
            {...attributes}
            {...listeners}
            className="flex-shrink-0 cursor-grab active:cursor-grabbing mt-7 text-#344767"
          >
            <Equal />
          </div>


          {/* Activity image */}
          <div className="relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
            <div className="absolute top-4 left-0 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-semibold z-10">
              {index + 1}
            </div>
            <img
              src={activity.image}
              alt={activity.name}
              className="w-full h-full object-cover"
            />
          </div>


          {/* Activity details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-1">
              <h3 className="text-sm font-semibold text-gray-900 truncate">{activity.name}</h3>

              {/* Desktop action buttons */}
              <div className="hidden lg:flex items-center gap-1 ml-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 text-green-500 hover:bg-green-50"
                  onClick={onSelect}
                >
                  <MapPin className="w-3 h-3" />
                </Button>


                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 text-red-500 hover:bg-red-50"
                  onClick={onDelete}
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-1">
              <span className="text-xs font-medium text-gray-700">{activity.rating}</span>
              <span className="text-yellow-400 text-xs">★</span>
              <span className="text-xs text-gray-500">({activity.reviewCount.toLocaleString()})</span>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">{activity.description}</p>
          </div>
        </div>

        {/* Mobile Hover Menu */}
        {showHoverMenu && (
          <div className="lg:hidden absolute top-2 right-2 bg-white border border-gray-200 rounded-lg shadow-lg p-1 z-10">
            <div className="flex flex-col gap-1">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-blue-500 hover:bg-blue-50"
                onClick={onView}
                title="Preview"
              >
                <Eye className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-red-500 hover:bg-red-50"
                onClick={onDelete}
                title="Remove"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DraggableActivityCard;
