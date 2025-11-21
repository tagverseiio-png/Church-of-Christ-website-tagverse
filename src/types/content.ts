export interface HomeContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  welcomeTitle: string;
  welcomeDescription: string;
  value1Title: string;
  value1Description: string;
  value2Title: string;
  value2Description: string;
  value3Title: string;
  value3Description: string;
  ctaTitle: string;
  ctaDescription: string;
}

export interface AboutContent {
  title: string;
  missionStatement: string;
  truthTitle: string;
  truthContent: string;
  truthContent2: string;
  manuscriptTitle: string;
  manuscriptQuote: string;
  manuscriptAuthor: string;
  manuscriptContent: string;
  manuscriptContent2: string;
  scriptureTitle: string;
  scriptureContent1: string;
  scriptureContent2: string;
  scriptureContent3: string;
}

export interface ContactContent {
  title: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  serviceTimeSunday: string;
  serviceTimeBibleStudy: string;
  serviceTimeWednesday: string;
}

export interface FooterContent {
  churchName: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  copyright: string;
}

export interface SiteContent {
  id?: string;
  home: HomeContent;
  about: AboutContent;
  contact: ContactContent;
  footer: FooterContent;
  updatedAt: Date;
}
