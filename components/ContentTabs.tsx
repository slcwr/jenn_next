'use client';

import { useState } from 'react';

type Tab = 'trending' | 'explore';

export default function ContentTabs() {
  const [activeTab, setActiveTab] = useState<Tab>('trending');

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 ${
            activeTab === 'trending' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabChange('trending')}
        >
          Trending
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === 'explore' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabChange('explore')}
        >
          Explore
        </button>
      </div>
    </div>
  );
}
