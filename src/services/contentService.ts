import { doc, getDoc, setDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { SiteContent } from '@/types/content';

const CONTENT_COLLECTION = 'siteContent';
const CONTENT_DOC_ID = 'main';

// Default content
export const defaultContent: SiteContent = {
  home: {
    heroTitle: 'The Blood of the New Covenant',
    heroSubtitle: 'Matthew 26:28',
    heroDescription: 'Experience the transforming love and grace found through Jesus Christ. Discover God\'s unconditional love and the promise of eternal life through the New Covenant.',
    welcomeTitle: 'Welcome to Our Fellowship',
    welcomeDescription: 'We are a community of believers united in Christ, devoted to sharing the gospel and living out the love and grace found in the New Covenant. Through His sacrifice, we have been redeemed and called to walk in His light.',
    value1Title: 'Love & Grace',
    value1Description: 'God\'s unconditional love through Christ\'s sacrifice brings us grace, forgiveness, and the gift of eternal life. His love transforms our hearts.',
    value2Title: 'Scripture & Truth',
    value2Description: 'We hold fast to the Word of God, seeking truth and understanding through the teachings of Christ and the apostles in the New Testament.',
    value3Title: 'Community',
    value3Description: 'We are a family in Christ, supporting one another in faith, worship, and service. Together, we grow in love and share His message.',
    ctaTitle: 'Come and Experience God\'s Love',
    ctaDescription: 'Join us in worship, fellowship, and growing together in faith. All are welcome in the family of Christ.',
  },
  about: {
    title: 'About The Church of Christ',
    missionStatement: 'We thrive to ensure the whole world knows the truth of the God the Father, the Lord Jesus Christ and the Holy Spirit through New blood covenant, so that the new covenantal believers inherit the heaven.',
    truthTitle: 'The Truth',
    truthContent: 'The truth is: The four books of Matthew, Mark, Luke and John "MMLJ/Before the cross" belong to the Old –not the New Testament. This means that millions in the denominational world including the majority among churches of Christ -- unknowingly and unwittingly – have accepted this grievous Roman Catholic error and they continue to teach, promote and perpetuate this ancient Papal "heresy" among their own, in the Lord\'s New Testament church – and around the world.',
    truthContent2: 'These biblical and historical facts are confirmed by letter from The Roman Catholic Vatican Library in Rome, Italy, The British Museum/Library in London, England, The American Bible Society in New York, N.Y, Oklahoma Christian University, Oklahoma City, OK, Harding University, Memphis, TN and would be acknowledged by every other reputable and biblical manuscript authority.',
    manuscriptTitle: 'Biblical Manuscript Authorities Declare',
    manuscriptQuote: 'The first \'title page\' to the Bible was added in a 1486AD edition of a Latin Bible published by Pruss of Strassburg...The authority for its insertion was that of the printer...Second, there were no title sheets in the oldest and best manuscripts.',
    manuscriptAuthor: 'Curt Niccum, Professor of the College of Biblical Studies, OKLAHOMA CHRISTIAN UNIVERSITY',
    manuscriptContent: 'This Roman Catholic deception and corruption of the "written" old and new covenants in the Bible caused the Protestant Reformation of the 14th and 16th centuries. Including many among churches of Christ who sought "Biblical authority" rather than "Papal authority" to establish their faith and hopes on Christ\'s teaching of the Old Testament law of Moses in MMLJ/BC – rather than on the "true" New Testament of Christ revealed in "the apostles\' doctrine" of Acts 2 through Revelation 22.',
    manuscriptContent2: 'This doctrinal error created among the Protestants by the Roman Catholic church has been the basic cause of the religious division between Catholics, Protestant denominations and doctrinal argument between churches of Christ and the Roman Catholic and Protestant world.',
    scriptureTitle: 'The Scriptural Truth',
    scriptureContent1: 'Simply stated, the Scriptures teach that Malachi was not the "end" or "last" book of the Old Testament, and that the book of Matthew was not the "beginning" or "first" book of the New Testament. The Scriptures teach that Christ\'s death on the cross described in Matthew 27, Mark 15, Luke 23 and John 19 was the "end" of the Old Testament (Rom. 10:4; 7:4). The Scriptures teach that Acts 2, not Matthew 1, marks the "beginning" of the New Testament age and revelation of new covenant "truth."',
    scriptureContent2: 'Truly, MMLJ/BC are the only books in the Bible that describe the "end" of the Old Testament law of Moses. MMLJ/BC do not describe the "beginning" of the New Testament age as many, on the basis of Roman Catholic "heresy" of mistranslation in 1486AD, assume today.',
    scriptureContent3: 'The Scriptures teach that MMLJ/BC describe the "last" thirty-three years of the Old Testament age and rule of the old covenant law of Moses among the Jews of Israel. And as faithful churches of Christ have known and taught from the time of Acts 2. The New Testament passage in which Christ describes and marks the "beginning" of the New Testament age and revelation of New Covenant doctrine.',
  },
  contact: {
    title: 'Get in Touch',
    description: 'We\'d love to hear from you. Whether you have questions, prayer requests, or would like to join our fellowship, please reach out.',
    email: 'pcs.chinna@gmail.com',
    phone: '+91 9052402299',
    address: 'Bro. Chinnaraja P\nH. No 2, Thanigai Street,\nRajaji Nagar,\nVillivakkam,\nChennai - 49',
    serviceTimeSunday: '10:00 AM',
    serviceTimeBibleStudy: '9:00 AM',
    serviceTimeWednesday: '7:00 PM',
  },
  footer: {
    churchName: 'The Church of Christ',
    description: 'A community of believers united in Christ, devoted to sharing the gospel and living out the love and grace found in the New Covenant.',
    email: 'pcs.chinna@gmail.com',
    phone: '+91 9052402299',
    address: 'H. No 2, Thanigai Street, Rajaji Nagar, Villivakkam, Chennai - 49',
    copyright: '© 2024 The Church of Christ. All rights reserved.',
  },
  updatedAt: new Date(),
};

// Get site content
export const getSiteContent = async (): Promise<SiteContent> => {
  try {
    const docRef = doc(db, CONTENT_COLLECTION, CONTENT_DOC_ID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log('Loaded content from Firestore:', data);
      
      // Ensure all required fields exist
      return {
        id: docSnap.id,
        home: data.home || defaultContent.home,
        about: data.about || defaultContent.about,
        contact: data.contact || defaultContent.contact,
        footer: data.footer || defaultContent.footer,
        updatedAt: data.updatedAt?.toDate() || new Date(),
      } as SiteContent;
    } else {
      console.warn('No content document found in Firestore, using defaults');
      return defaultContent;
    }
  } catch (error) {
    console.error('Error fetching site content:', error);
    return defaultContent;
  }
};

// Update site content
export const updateSiteContent = async (content: Partial<SiteContent>): Promise<void> => {
  try {
    const docRef = doc(db, CONTENT_COLLECTION, CONTENT_DOC_ID);
    await setDoc(docRef, {
      ...content,
      updatedAt: new Date(),
    }, { merge: true });
  } catch (error) {
    console.error('Error updating site content:', error);
    throw error;
  }
};

// Seed initial content to database
export const seedSiteContent = async (): Promise<void> => {
  try {
    const docRef = doc(db, CONTENT_COLLECTION, CONTENT_DOC_ID);
    await setDoc(docRef, defaultContent);
    console.log('Site content seeded successfully');
  } catch (error) {
    console.error('Error seeding site content:', error);
    throw error;
  }
};

// Check if content exists
export const contentExists = async (): Promise<boolean> => {
  try {
    const docRef = doc(db, CONTENT_COLLECTION, CONTENT_DOC_ID);
    const docSnap = await getDoc(docRef);
    return docSnap.exists();
  } catch (error) {
    console.error('Error checking content existence:', error);
    return false;
  }
};
