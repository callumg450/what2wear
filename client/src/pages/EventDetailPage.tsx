import React from 'react';
import { Link } from 'react-router-dom';

const EventDetailPage = () => {
  return (
    <div className="container mx-auto space-y-8">
      <Link 
        to="/"
        className="inline-flex items-center text-gray-500 hover:text-pink-600 group"
      >
        <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Events
      </Link>

      <div className="bg-white rounded-2xl shadow-xl shadow-pink-100/40 overflow-hidden">
        <div className="h-48 bg-gradient-to-r from-pink-100 to-purple-100" />
        
        <div className="p-8 -mt-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold leading-relaxed bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
                  Summer Wedding Reception
                </h1>
                <p className="text-gray-500">Hosted by Jane Smith</p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-700">
                Public Event
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Date & Time</h3>
                <p className="text-gray-900">June 1st, 2025 • 6:00 PM</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Location</h3>
                <p className="text-gray-900">Crystal Gardens, Downtown</p>
              </div>
              <div className="col-span-2">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Description</h3>
                <p className="text-gray-900">Semi-formal garden party. Summer cocktail attire suggested.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">              <h2 className="text-2xl font-bold leading-relaxed text-gray-900">Outfits</h2>
              <Link
                to="add-outfit"
                className="inline-flex items-center px-6 py-3 rounded-full bg-pink-600 text-white font-medium shadow-lg shadow-pink-200 hover:bg-pink-500 transition-all duration-200"
              >
                + Add Outfit
              </Link>
            </div>      <div className="grid gap-8 sm:grid-cols-2">
        {/* Sample outfits - will be dynamic later */}        {[
          {
            id: 1,
            user: 'Sarah Parker',
            timestamp: '2 hours ago',
            caption: 'Found this gorgeous floral dress that\'s perfect for a garden wedding! Adding some pearl accessories to keep it elegant.',
            items: [              { 
                category: 'Dress', 
                description: 'Pink Floral Maxi Dress', 
                imageUrl: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&auto=format&fit=crop&q=60' 
              },
              { 
                category: 'Shoes', 
                description: 'Blush Pearl Sandals', 
                imageUrl: 'https://images.unsplash.com/photo-1613987876445-fcb353cd8e27?w=800&auto=format&fit=crop&q=60' 
              },
              { 
                category: 'Accessories', 
                description: 'Pearl Drop Earrings', 
                imageUrl: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&auto=format&fit=crop&q=60' 
              }
            ]
          },
          {
            id: 2,
            user: 'Mike Chen',
            timestamp: '5 hours ago',
            caption: 'Going with a light summer suit that\'s perfect for an outdoor wedding. The linen keeps it breathable!',
            items: [
              { 
                category: 'Suit', 
                description: 'Beige Linen Summer Suit', 
                imageUrl: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=800&auto=format&fit=crop&q=60' 
              },
              { 
                category: 'Shirt', 
                description: 'White Cotton Dress Shirt', 
                imageUrl: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&auto=format&fit=crop&q=60' 
              },
              { 
                category: 'Shoes', 
                description: 'Cognac Leather Oxfords', 
                imageUrl: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&auto=format&fit=crop&q=60' 
              }
            ]
          },
          {
            id: 3,
            user: 'Emma Wilson',
            timestamp: '1 day ago',
            caption: 'Pastel colors for a summer garden party! The dress has pockets 😍',
            items: [
              { 
                category: 'Dress', 
                description: 'Lavender Midi Dress', 
                imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=60' 
              },
              { 
                category: 'Shoes', 
                description: 'Silver Strappy Heels', 
                imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=60' 
              },              { 
                category: 'Accessories', 
                description: 'Crystal Hair Clip', 
                imageUrl: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&auto=format&fit=crop&q=60' 
              }
            ]
          }
        ].map((outfit) => (
          <div key={outfit.id} className="group bg-white rounded-xl shadow-xl shadow-pink-100/20 overflow-hidden hover:shadow-2xl transition-all duration-200">
            <div className="p-6 space-y-6">
              {/* User info and timestamp */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center text-pink-600 font-medium">
                    {outfit.user.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{outfit.user}</h3>
                    <p className="text-sm text-gray-500">{outfit.timestamp}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-pink-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </button>
              </div>

              {/* Outfit caption */}
              <p className="text-gray-600">{outfit.caption}</p>

              {/* Outfit items grid */}
              <div className="grid grid-cols-2 gap-4">
                {outfit.items.map((item, index) => (
                  <div key={index} className={index === 0 ? "col-span-2" : ""}>
                    <div className="group relative">
                      <div className={`${index === 0 ? 'aspect-[16/9]' : 'aspect-square'} rounded-lg bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden`}>
                        <img 
                          src={item.imageUrl} 
                          alt={item.description}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-white text-sm font-medium">{item.category}</p>
                          <p className="text-white/90 text-xs">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interaction buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <button className="text-gray-400 hover:text-pink-600 flex items-center space-x-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-sm">12</span>
                  </button>
                  <button className="text-gray-400 hover:text-pink-600 flex items-center space-x-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-sm">4</span>
                  </button>
                </div>
                <button className="text-gray-400 hover:text-pink-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="relative bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border-2 border-dashed border-pink-200 p-8 flex flex-col items-center justify-center text-center group hover:border-pink-300 transition-all duration-200 min-h-[400px]">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl" />
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Share Your Style</h3>
            <p className="text-gray-500 mb-8 max-w-xs mx-auto">Add your outfit and help others decide what to wear!</p>
            <Link
              to="add-outfit"
              className="inline-flex items-center px-6 py-3 rounded-full bg-pink-600 text-white font-medium shadow-lg shadow-pink-200 hover:bg-pink-500 group-hover:scale-105 transition-all duration-200"
            >
              Create Outfit
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
