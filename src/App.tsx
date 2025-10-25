import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentDisplay } from './components/ContentDisplay';
import { courseData } from './data/courseData';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';

const App: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>('0.1');
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <LanguageProvider>
      <div className="flex h-screen bg-slate-50 text-slate-800 font-sans">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-40 w-80 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          aria-label="Sidebar"
        >
          <Sidebar
            courseData={courseData}
            selectedTopicId={selectedTopicId}
            setSelectedTopicId={setSelectedTopicId}
            onSelect={() => setSidebarOpen(false)}
          />
        </div>

        {/* Overlay for mobile view when sidebar is open */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header
            isSidebarOpen={isSidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          {/* Main Content */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10">
            <ContentDisplay topicId={selectedTopicId} />
          </main>
        </div>
      </div>
    </LanguageProvider>
  );
};

export default App;
