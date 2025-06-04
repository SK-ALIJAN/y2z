
export interface Activity {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  order: number;
}

export interface ItineraryDay {
  id: string;
  title: string;
  activities: Activity[];
}

export interface ActivityCardProps {
  activity: Activity;
  index: number;
  onSelect?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
  onView?: () => void;
  onShare?: () => void;
}
