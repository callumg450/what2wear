import React from 'react';
import { Link } from 'react-router-dom';

const CreateEventPage = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:col-span-1">
          <Link 
            to="/"
            className="inline-flex items-center text-gray-500 hover:text-pink-600 mb-8 group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Events
          </Link>

          <div className="bg-white rounded-2xl shadow-xl shadow-pink-100/40 p-8 sticky top-24">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-8">
              Create New Event
            </h1>

            <form className="space-y-6">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Event Title</label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-all duration-200"
                  placeholder="e.g. Summer Wedding Reception"
                  disabled
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input 
                    type="date"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-all duration-200"
                    disabled
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Time</label>
                  <input 
                    type="time"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-all duration-200"
                    disabled
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-all duration-200"
                  placeholder="Venue name or address"
                  disabled
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-all duration-200"
                  rows={3}
                  placeholder="Add any dress code or special instructions..."
                  disabled
                />
              </div>

              <div className="flex items-center gap-3 py-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isPrivate"
                    className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                    disabled
                  />
                  <label htmlFor="isPrivate" className="ml-2 text-sm text-gray-700">
                    Private event
                  </label>
                </div>
                <div className="text-xs text-gray-500">
                  (Only people with the link can view)
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg font-medium shadow-lg shadow-pink-200 opacity-70 cursor-not-allowed"
                  disabled
                >
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="hidden lg:block">
          <div className="sticky top-24 p-8">
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">✨</div>
                <h2 className="text-2xl font-semibold text-gray-800">Event Preview</h2>
                <p className="text-gray-500 max-w-sm mx-auto">
                  Your event details will appear here as you fill out the form
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEventPage;
