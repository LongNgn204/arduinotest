export type Language = 'en' | 'vi';
export type LocalizedString = {
  [key in Language]: string;
};

export enum SectionType {
  OBJECTIVE = 'Mục tiêu bài học',
  WARMUP = 'Khởi động',
  KNOWLEDGE = 'Hình thành kiến thức',
  PRACTICE = 'Luyện tập',
  APPLICATION = 'Vận dụng',
  DID_YOU_KNOW = 'Em có biết?',
  SUMMARY = 'Tóm tắt bài học',
  CODE = 'Code Example',
  TOC = 'Mục lục',
  GUIDE = 'Hướng dẫn sử dụng sách',
  PROJECT = 'Dự án',
  EXERCISE = 'Bài tập',
  APPENDIX = 'Phụ lục',
  WARNING = 'Cảnh báo an toàn',
  EXPANSION = 'Mở rộng'
}

export interface Section {
  type: SectionType;
  title?: LocalizedString;
  content: LocalizedString | LocalizedString[] | string;
}

export interface Lesson {
  id: string;
  title: LocalizedString;
  sections: Section[];
}

export interface Part {
  id: string;
  title: LocalizedString;
  lessons: Lesson[];
}
