import React from 'react';
import { Link, useParams } from 'react-router-dom';
import OutfitUploader from '../components/OutfitUploader';

const AddOutfitPage = () => {
  const { id: eventId } = useParams<{ id: string }>();

  const handleSubmit = async (data: { caption: string; items: any[] }) => {
    // TODO: Implement the API call to save the outfit
    console.log('Outfit data:', data);
  };

  return (
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="lg:col-span-1">
          <Link 
            to=".."
            className="inline-flex items-center text-gray-500 hover:text-pink-600 mb-8 group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Event
          </Link>          <div className="bg-white rounded-2xl shadow-xl shadow-pink-100/40 p-8">
            <h1 className="text-3xl font-bold leading-relaxed bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-8">
              Add Your Outfit
            </h1>

            <OutfitUploader onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOutfitPage;
