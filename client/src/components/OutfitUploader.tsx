import React, { useState } from 'react';

type OutfitItem = {
  id?: string;
  imageUrl?: string;
  linkUrl?: string;
  description: string;
  category: 'top' | 'bottom' | 'shoes' | 'accessories' | 'other';
};

type OutfitUploaderProps = {
  onSubmit: (data: { caption: string; items: OutfitItem[] }) => void;
  isLoading?: boolean;
};

const CATEGORY_OPTIONS = [
  { value: 'complete', label: 'Complete Outfit' },
  { value: 'top', label: 'Top' },
  { value: 'bottom', label: 'Bottom' },
  { value: 'shoes', label: 'Shoes' },
  { value: 'accessories', label: 'Accessories' },
  { value: 'other', label: 'Other' }
] as const;

const OutfitUploader: React.FC<OutfitUploaderProps> = ({ onSubmit, isLoading = false }) => {
  const [items, setItems] = useState<OutfitItem[]>([]);
  const [caption, setCaption] = useState('');
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const addItem = () => {
    setItems([
      ...items,
      {
        description: '',
        category: 'other',
      },
    ]);
  };

  const updateItem = (index: number, updates: Partial<OutfitItem>) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], ...updates };
    setItems(newItems);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ caption, items });
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragEnter = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newItems = [...items];
    const draggedItem = newItems[draggedIndex];
    newItems.splice(draggedIndex, 1);
    newItems.splice(index, 0, draggedItem);
    setItems(newItems);
    setDraggedIndex(index);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Outfit Caption
        </label>
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-all duration-200"
          placeholder="Describe your complete outfit..."
          rows={2}
        />
      </div>

      <div className="space-y-6">
        {items.map((item, index) => (
          <div 
            key={index} 
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDragOver={(e) => e.preventDefault()}
            className={`relative bg-white rounded-xl shadow-lg p-6 transition-all duration-200 ${
              draggedIndex === index ? 'border-2 border-pink-300 opacity-50' : ''
            }`}
          >
            <div className="absolute top-4 right-4 flex items-center space-x-2">
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600 cursor-move"
                title="Drag to reorder"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="text-gray-400 hover:text-pink-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={item.category}
                    onChange={(e) => updateItem(index, { category: e.target.value as OutfitItem['category'] })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-all duration-200"
                  >
                    {CATEGORY_OPTIONS.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => updateItem(index, { description: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-all duration-200"
                    placeholder="e.g., Blue denim jacket"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload Image</label>
                  <div className="relative">
                    <input
                      type="file"
                      onChange={(e) => {
                        // TODO: Handle file upload
                        console.log('File selected:', e.target.files?.[0]);
                      }}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      accept="image/*"
                    />
                    <div className="w-full h-32 border-2 border-dashed border-gray-200 rounded-lg hover:border-pink-300 transition-colors duration-200 flex flex-col items-center justify-center text-gray-500 hover:text-pink-600">
                      <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">Click or drop image</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">or Paste URL</label>
                  <input
                    type="url"
                    value={item.linkUrl || ''}
                    onChange={(e) => updateItem(index, { linkUrl: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-all duration-200"
                    placeholder="https://..."
                  />
                </div>
              </div>
            </div>
          </div>
        ))}        <button
          type="button"
          onClick={addItem}
          className="group w-full py-8 px-6 rounded-xl border-2 border-dashed border-gray-200 hover:border-pink-300 transition-all duration-200 relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 mb-3 rounded-full bg-pink-50 group-hover:bg-pink-100 flex items-center justify-center transition-colors duration-200">
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors duration-200">
              Add Another Item
            </span>
            <p className="mt-1 text-sm text-gray-500">
              Build your complete outfit piece by piece
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </button>
      </div>

      <div className="sticky bottom-0 bg-white border-t border-gray-100 py-4 -mx-8 px-8 mt-12">
        <div className="max-w-4xl mx-auto">
          <button
            type="submit"
            disabled={items.length === 0 || isLoading}
            className="relative w-full px-6 py-4 text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl font-medium shadow-lg shadow-pink-200 disabled:opacity-50 disabled:cursor-not-allowed hover:from-pink-500 hover:to-purple-500 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all duration-200 overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center">
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Posting...
                </>
              ) : (
                <>
                  Share Your Outfit
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </button>
          {items.length === 0 && (
            <p className="mt-3 text-sm text-center text-gray-500">
              Add at least one item to your outfit
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default OutfitUploader;
