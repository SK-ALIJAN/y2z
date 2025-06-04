import { ItineraryDay } from '@/types/itinerary';

export const mockItineraryData: ItineraryDay = {
  id: 'day-1',
  title: 'Day',
  activities: [
    {
      id: 'india-gate',
      name: 'India Gate',
      rating: 4.6,
      reviewCount: 281124,
      description: 'India Gate is a prominent war memorial in New Delhi, built in honor of soldiers who died during World War I and the Third Anglo-Afghan War. Designed by Edwin Lutyens, it stands as a symbol of valor and sacrifice.',
      image: 'https://thumbs.dreamstime.com/b/travel-destination-concept-flat-design-stylish-isolated-color-background-47255326.jpg',
      lat: 28.612894,
      lng: 77.229446,
      order: 1
    },
    {
      id: 'red-fort',
      name: 'Red Fort',
      rating: 4.5,
      reviewCount: 168729,
      description: 'The Red Fort, or Lal Qila, is a historic fortification in the heart of Old Delhi. Built by Mughal emperor Shah Jahan in the 17th century, it served as the main residence of the Mughal dynasty for nearly 200 years.',
      image: 'https://media.istockphoto.com/id/492673612/photo/travel.jpg?s=612x612&w=0&k=20&c=gYc3-FCt-2q627yXZDBAbeYDiy3RHSow_WyeO4pRfgM=',
      lat: 28.656473,
      lng: 77.242943,
      order: 2
    },
    {
      id: 'qutub-minar',
      name: 'Qutub Minar',
      rating: 4.5,
      reviewCount: 151556,
      description: 'Qutub Minar is a 73-meter tall victory tower located in the Mehrauli area of Delhi. Constructed in the 12th century by Qutb-ud-din Aibak, it is one of the tallest minarets in the world made of bricks.',
      image: 'https://thumbs.dreamstime.com/b/travel-destination-concept-flat-design-stylish-isolated-color-background-47255326.jpg',
      lat: 28.524427,
      lng: 77.185455,
      order: 3
    },
    {
      id: 'lotus-temple',
      name: 'Lotus Temple',
      rating: 4.5,
      reviewCount: 67772,
      description: 'The Lotus Temple is a Baháʼí House of Worship, notable for its flowerlike shape. Opened in 1986, it welcomes people of all faiths and is known for its serene ambiance and stunning architecture.',
      image: 'https://media.istockphoto.com/id/492673612/photo/travel.jpg?s=612x612&w=0&k=20&c=gYc3-FCt-2q627yXZDBAbeYDiy3RHSow_WyeO4pRfgM=',
      lat: 28.553558,
      lng: 77.259132,
      order: 4
    }
  ]
};
