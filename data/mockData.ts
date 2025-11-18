
import { District } from '../types';
import { NewsArticle } from '../types';

export const DISTRICTS: District[] = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  name: `District ${i + 1}`,
  description: `Official information and services for residents of District ${i + 1}.`,
  longDescription: `Welcome to the official portal for District ${i + 1}. Here you will find comprehensive resources, news updates, and necessary forms to help you navigate our services. Our commitment is to foster a vibrant and supportive community for all residents. Explore the sections below to learn more about what our district has to offer.`,
  imageUrl: `https://picsum.photos/seed/district${i + 1}/800/600`,
  forms: [
    { id: 1, name: 'Community Grant Application', url: `/forms/district${i + 1}-grant.pdf` },
    { id: 2, name: 'Building Permit Form', url: `/forms/district${i + 1}-building.pdf` },
    { id: 3, name: 'Public Event Request', url: `/forms/district${i + 1}-event.pdf` },
  ],
}));

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 1,
    title: 'Annual City-Wide Marathon Announced',
    content: 'Get your running shoes ready! The annual city-wide marathon will take place on the 15th of next month. The route will cover all nine districts, showcasing the beautiful landscapes of our city.',
    date: '2023-10-01',
    imageUrl: 'https://picsum.photos/seed/news1/400/300',
  },
  {
    id: 2,
    title: 'New Library Opening in District 3',
    content: 'A new state-of-the-art library is set to open its doors in District 3. The grand opening ceremony will be held this Saturday, featuring guest authors and activities for children.',
    date: '2023-10-02',
    districtId: 3,
    imageUrl: 'https://picsum.photos/seed/news2/400/300',
  },
  {
    id: 3,
    title: 'Public Transportation System Upgrade',
    content: 'We are excited to announce a major upgrade to our public transportation system. New eco-friendly buses will be rolled out across the city over the next six months.',
    date: '2023-09-28',
    imageUrl: 'https://picsum.photos/seed/news3/400/300',
  },
  {
    id: 4,
    title: 'District 7 Park Renovation Project Completed',
    content: 'The renovation of the central park in District 7 is now complete. The park features new playgrounds, a jogging track, and a beautiful botanical garden. It is now open to the public.',
    date: '2023-09-25',
    districtId: 7,
    imageUrl: 'https://picsum.photos/seed/news4/400/300',
  },
  {
    id: 5,
    title: 'Community Farming Initiative in District 5',
    content: 'District 5 has launched a new community farming initiative to promote local agriculture. Residents can now sign up for a plot in the new community garden.',
    date: '2023-10-05',
    districtId: 5,
    imageUrl: 'https://picsum.photos/seed/news5/400/300',
  },
  {
    id: 6,
    title: 'Tech Hub Launch in District 1',
    content: 'District 1 is now home to a new technology hub aimed at fostering innovation and supporting startups. The hub will offer co-working spaces and mentorship programs.',
    date: '2023-10-08',
    districtId: 1,
    imageUrl: 'https://picsum.photos/seed/news6/400/300',
  },
];
