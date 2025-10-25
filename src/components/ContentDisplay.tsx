import React, { useContext } from 'react';
import { courseData } from '../data/courseData';
import { Lesson, Section, SectionType, LocalizedString, Part } from '../types';
import { CodeBlock } from './CodeBlock';
import { LightbulbIcon, CheckCircleIcon, BeakerIcon, BookOpenIcon, SparklesIcon, ExclamationIcon, PlayIcon, DocumentTextIcon, CogIcon } from './icons/ContentIcons';
import { LanguageContext } from '../contexts/LanguageContext';

const getIconForSection = (type: SectionType) => {
  switch (type) {
    case SectionType.OBJECTIVE: return <CheckCircleIcon />;
    case SectionType.WARMUP: return <PlayIcon />;
    case SectionType.KNOWLEDGE: return <BookOpenIcon />;
    case SectionType.PRACTICE: return <BeakerIcon />;
    case SectionType.APPLICATION: return <SparklesIcon />;
    case SectionType.DID_YOU_KNOW: return <LightbulbIcon />;
    case SectionType.SUMMARY: return <DocumentTextIcon />;
    case SectionType.WARNING: return <ExclamationIcon color="text-red-500" />;
    case SectionType.EXPANSION: return <SparklesIcon color="text-purple-500" />;
    case SectionType.EXERCISE: return <CogIcon />;
    case SectionType.APPENDIX: return <BookOpenIcon color="text-slate-500" />;
    case SectionType.GUIDE: return <BookOpenIcon color="text-teal-500" />;
    default: return null;
  }
};

const getCardStyleForSection = (type: SectionType): string => {
  switch (type) {
    case SectionType.OBJECTIVE: return 'bg-sky-50 border-sky-200';
    case SectionType.WARMUP: return 'bg-emerald-50 border-emerald-200';
    case SectionType.PRACTICE: return 'bg-amber-50 border-amber-200';
    case SectionType.APPLICATION: return 'bg-purple-50 border-purple-200';
    case SectionType.DID_YOU_KNOW: return 'bg-indigo-50 border-indigo-200';
    case SectionType.SUMMARY: return 'bg-slate-100 border-slate-200';
    case SectionType.WARNING: return 'bg-red-50 border-red-200';
    case SectionType.EXPANSION: return 'bg-pink-50 border-pink-200';
    case SectionType.EXERCISE: return 'bg-orange-50 border-orange-200';
    case SectionType.APPENDIX: return 'bg-slate-50 border-slate-200';
    case SectionType.TOC: return 'bg-white border-slate-200';
    case SectionType.GUIDE: return 'bg-teal-50 border-teal-200';
    default: return 'bg-white border-slate-200';
  }
};

const SectionCard: React.FC<{ section: Section }> = ({ section }) => {
  const { language } = useContext(LanguageContext);
  const icon = getIconForSection(section.type);
  const cardStyle = getCardStyleForSection(section.type);

  if (section.type === SectionType.CODE) {
    // Render nothing if content is empty, prevents empty code blocks
    if (!section.content) return null;
    return <CodeBlock>{section.content as string}</CodeBlock>;
  }
  
  const title = section.title ? section.title[language] : section.type;
  const content = section.content;

  // Render nothing if a knowledge section has no content (e.g. it only serves as a title for a code block)
  if (section.type === SectionType.KNOWLEDGE && Array.isArray(content) && content.length === 0) {
      return (
          <h3 className="flex items-center text-xl font-semibold text-slate-800 mt-8 mb-4">
              {icon && <span className="mr-3">{icon}</span>}
              {title}
          </h3>
      );
  }

  return (
    <div className={`p-6 rounded-lg border ${cardStyle} shadow-sm`}>
      <h3 className="flex items-center text-xl font-semibold text-slate-800 mb-3">
        {icon && <span className="mr-3">{icon}</span>}
        {title}
      </h3>
      {Array.isArray(content) ? (
        <ul className="list-disc list-inside space-y-2 text-slate-600 leading-relaxed">
          {content.map((item, index) => <li key={index}>{(item as LocalizedString)[language]}</li>)}
        </ul>
      ) : (
        <p className="text-slate-600 leading-relaxed">{(content as LocalizedString)[language]}</p>
      )}
    </div>
  );
};

export const ContentDisplay: React.FC<{ topicId: string }> = ({ topicId }) => {
  const { language } = useContext(LanguageContext);
  
  let lesson: Lesson | null = null;
  let part: Part | null = null;

  for (const p of courseData) {
    const foundLesson = p.lessons.find((l) => l.id === topicId);
    if (foundLesson) {
      lesson = foundLesson;
      part = p;
      break;
    }
  }

  if (!lesson || !part) {
    const placeholderText = {
      en: 'Please select a topic to begin.',
      vi: 'Vui lòng chọn một chủ đề để bắt đầu.'
    }
    return <div className="text-center text-slate-500">{placeholderText[language]}</div>;
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-10">
        <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-1">{part.title[language]}</p>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">{lesson.title[language]}</h1>
      </div>
      <div className="space-y-6">
        {lesson.sections.map((section, index) => (
          <SectionCard key={index} section={section} />
        ))}
      </div>
    </div>
  );
};
