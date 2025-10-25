import React, { useContext } from 'react';
import { Part } from '../types';
import { BookIcon, CodeIcon } from './icons/MenuIcons';
import { LanguageContext } from '../contexts/LanguageContext';

interface SidebarProps {
  courseData: Part[];
  selectedTopicId: string;
  setSelectedTopicId: (id: string) => void;
  onSelect: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ courseData, selectedTopicId, setSelectedTopicId, onSelect }) => {
  const { language } = useContext(LanguageContext);
  
  const uiText = {
    subtitle: {
      en: 'From Basic to Applied',
      vi: 'Từ cơ bản đến ứng dụng'
    },
    author: {
      en: 'Author: Long Nguyen',
      vi: 'Tác giả: Long Nguyễn'
    },
    copyright: {
        en: 'Copyright © 2025 by Long Nguyen',
        vi: 'Bản quyền © 2025 bởi Long Nguyễn'
    }
  };
  
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat(language === 'vi' ? 'vi-VN' : 'en-US', {
      dateStyle: 'long'
  }).format(currentDate);


  return (
    <div className="flex flex-col h-full bg-white">
      <div className="p-5 border-b border-slate-200">
        <h1 className="text-2xl font-bold text-slate-800">Arduino Hub</h1>
        <p className="text-sm text-slate-500">{uiText.subtitle[language]}</p>
      </div>
      <nav className="flex-1 p-3 overflow-y-auto">
        <ul>
          {courseData.map((part) => (
            <li key={part.id} className="mb-5">
              <h2 className="px-3 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">{part.title[language]}</h2>
              <ul>
                {part.lessons.map((lesson) => (
                  <li key={lesson.id}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedTopicId(lesson.id);
                        onSelect();
                      }}
                      className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 relative ${
                        selectedTopicId === lesson.id
                          ? 'bg-sky-50 text-sky-700'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      {selectedTopicId === lesson.id && <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-sky-500 rounded-r-full"></div>}
                      {part.id.startsWith('p0') ? <BookIcon /> : <CodeIcon />}
                      <span className="ml-3">{lesson.title[language]}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-slate-200 text-center text-xs text-slate-500">
        <p>{uiText.author[language]}</p>
        <p>{formattedDate}</p>
        <p className="mt-2">{uiText.copyright[language]}</p>
      </div>
    </div>
  );
};
