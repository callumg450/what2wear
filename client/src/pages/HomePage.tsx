import React from 'react';
import { Link } from 'react-router-dom';

const sampleEvents = [
  {
    id: 1,
    title: "Summer Wedding",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop&q=60",
    date: "June 15th, 2025",
    location: "Sunset Gardens",
    isPrivate: false,
    outfits: 5
  },
  {
    id: 2,
    title: "Tech Conference",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&auto=format&fit=crop&q=60",
    date: "July 1st, 2025",
    location: "Convention Center",
    isPrivate: true,
    outfits: 3
  },
  {
    id: 3,
    title: "Beach Party",
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=60",
    date: "July 4th, 2025",
    location: "Coastal Bay",
    isPrivate: false,
    outfits: 8
  }
];

const HomePage = () => {
  return (    
    <div className="container mx-auto space-y-12">      
      <div className="flex justify-between items-center py-4">
        <h1 className="text-4xl font-bold leading-relaxed bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Upcoming Events
        </h1>
        <Link
          to="/create"
          className="inline-flex items-center px-6 py-3 rounded-full bg-pink-600 text-white font-medium shadow-lg shadow-pink-200 hover:bg-pink-500 transition-all duration-200"
        >
          + New Event
        </Link>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sampleEvents.map((event) => (
          <div key={event.id} className="group relative bg-white rounded-2xl shadow-xl shadow-pink-100/40 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-200">
            <div 
              className="aspect-[4/3] bg-center bg-cover" 
              style={{ backgroundImage: `url(${event.image})` }} 
            />            <div className="p-6">
              <h3 className="font-semibold text-xl leading-relaxed mb-2">{event.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{event.date} • {event.location}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
                  {event.isPrivate ? 'Private' : 'Public'}
                </span>
                <span className="text-sm text-gray-500">{event.outfits} outfits</span>
              </div>
            </div>
            <Link to={`/event/${event.id}`} className="absolute inset-0">
              <span className="sr-only">View event</span>
            </Link>
          </div>
        ))}

        <div className="relative bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border-2 border-dashed border-pink-200 p-8 flex flex-col items-center justify-center text-center group hover:border-pink-300 transition-all duration-200">
          <div className="text-pink-300 mb-4">✨</div>
          <h3 className="font-medium text-gray-600 mb-2">Ready to plan your event?</h3>
          <p className="text-sm text-gray-500 mb-6">Create an event and start collecting outfit ideas!</p>
          <Link
            to="/create"
            className="inline-flex items-center px-6 py-2 rounded-full bg-white text-pink-600 font-medium shadow-lg shadow-pink-100 group-hover:shadow-xl group-hover:scale-105 transition-all duration-200"
          >
            Create Event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
