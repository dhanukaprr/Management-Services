import { Province } from '../types';
import { NewsArticle } from '../types';

export const PROVINCES: Province[] = [
  {
    id: 1,
    name: 'Western Province',
    description: 'Economic hub with Colombo, the commercial capital.',
    longDescription: 'The Western Province is the most densely populated province of Sri Lanka. It is home to the legislative capital Sri Jayawardenepura Kotte as well as Colombo, the administrative and business center of the country.',
    imageUrl: 'https://picsum.photos/seed/colombo/800/600',
    forms: [
      { id: 1, name: 'Business Registration Form', url: '/forms/wp-business.pdf' },
      { id: 2, name: 'Land Permit Application', url: '/forms/wp-land.pdf' },
    ],
    districts: [
      { id: 101, name: 'Colombo' },
      { id: 102, name: 'Gampaha' },
      { id: 103, name: 'Kalutara' },
    ],
  },
  {
    id: 2,
    name: 'Central Province',
    description: 'Known for its tea plantations and scenic highlands.',
    longDescription: 'The Central Province is a mountainous region in the heart of Sri Lanka. It is famous for its cool climate, stunning landscapes, and the production of Ceylon tea. The city of Kandy is a major cultural and religious center.',
    imageUrl: 'https://picsum.photos/seed/kandy/800/600',
    forms: [
      { id: 1, name: 'Agricultural Grant Application', url: '/forms/cp-agri.pdf' },
      { id: 2, name: 'Tourism Business Permit', url: '/forms/cp-tourism.pdf' },
    ],
    districts: [
      { id: 201, name: 'Kandy' },
      { id: 202, name: 'Matale' },
      { id: 203, name: 'Nuwara Eliya' },
    ],
  },
  {
    id: 3,
    name: 'Southern Province',
    description: 'Famous for its beautiful beaches and historic Galle Fort.',
    longDescription: 'The Southern Province is a coastal region known for its pristine beaches, wildlife sanctuaries, and rich cultural heritage. The historic city of Galle, with its Dutch Fort, is a UNESCO World Heritage Site.',
    imageUrl: 'https://picsum.photos/seed/galle/800/600',
    forms: [
      { id: 1, name: 'Coastal Construction Permit', url: '/forms/sp-coastal.pdf' },
      { id: 2, name: 'Fisheries License Application', url: '/forms/sp-fisheries.pdf' },
    ],
    districts: [
      { id: 301, name: 'Galle' },
      { id: 302, name: 'Matara' },
      { id: 303, name: 'Hambantota' },
    ],
  },
  {
    id: 4,
    name: 'Northern Province',
    description: 'A region of rich cultural heritage and post-conflict revival.',
    longDescription: 'The Northern Province has a unique cultural identity with a rich history. Following the end of the civil war, the region is undergoing significant development and revitalization, showcasing its resilience and cultural vibrancy.',
    imageUrl: 'https://picsum.photos/seed/jaffna/800/600',
    forms: [
        { id: 1, name: 'Resettlement Assistance Form', url: '/forms/np-resettlement.pdf' },
        { id: 2, name: 'Small Enterprise Development Fund', url: '/forms/np-enterprise.pdf' },
    ],
    districts: [
        { id: 401, name: 'Jaffna' },
        { id: 402, name: 'Kilinochchi' },
        { id: 403, name: 'Mannar' },
        { id: 404, name: 'Vavuniya' },
        { id: 405, name: 'Mullaitivu' },
    ],
  },
  {
    id: 5,
    name: 'Eastern Province',
    description: 'Home to stunning coastlines and diverse communities.',
    longDescription: 'The Eastern Province is known for its beautiful beaches like Trincomalee and Arugam Bay, a world-renowned surfing destination. The province is a multicultural hub with a diverse population of Sinhalese, Tamils, and Muslims.',
    imageUrl: 'https://picsum.photos/seed/trincomalee/800/600',
    forms: [
        { id: 1, name: 'Tourism Development Application', url: '/forms/ep-tourism.pdf' },
        { id: 2, name: 'Community Project Proposal', url: '/forms/ep-community.pdf' },
    ],
    districts: [
        { id: 501, name: 'Trincomalee' },
        { id: 502, name: 'Batticaloa' },
        { id: 503, name: 'Ampara' },
    ],
  },
  {
    id: 6,
    name: 'North Western Province',
    description: 'Known for its coconut plantations and ancient cities.',
    longDescription: 'The North Western Province, or Wayamba, is a major agricultural region, particularly famous for its vast coconut estates. It also contains important archaeological sites from ancient kingdoms.',
    imageUrl: 'https://picsum.photos/seed/kurunegala/800/600',
    forms: [
        { id: 1, name: 'Coconut Cultivation Subsidy', url: '/forms/nwp-coconut.pdf' },
        { id: 2, name: 'Heritage Site Access Permit', url: '/forms/nwp-heritage.pdf' },
    ],
    districts: [
        { id: 601, name: 'Kurunegala' },
        { id: 602, name: 'Puttalam' },
    ],
  },
  {
    id: 7,
    name: 'North Central Province',
    description: 'The cradle of ancient Sri Lankan civilization.',
    longDescription: 'The North Central Province is home to the ancient capitals of Anuradhapura and Polonnaruwa, which are UNESCO World Heritage sites. This region is dotted with ancient stupas, reservoirs, and palaces.',
    imageUrl: 'https://picsum.photos/seed/anuradhapura/800/600',
    forms: [
        { id: 1, name: 'Archaeological Research Permit', url: '/forms/ncp-archaeology.pdf' },
        { id: 2, name: 'Irrigation Support Request', url: '/forms/ncp-irrigation.pdf' },
    ],
    districts: [
        { id: 701, name: 'Anuradhapura' },
        { id: 702, name: 'Polonnaruwa' },
    ],
  },
  {
    id: 8,
    name: 'Uva Province',
    description: 'A rural province with stunning natural beauty.',
    longDescription: 'Uva Province is a remote and picturesque region known for its waterfalls, mountains, and national parks like Yala and Gal Oya. Badulla and Monaragala are its main towns.',
    imageUrl: 'https://picsum.photos/seed/badulla/800/600',
    forms: [
        { id: 1, name: 'National Park Entry Pass', url: '/forms/uva-parks.pdf' },
        { id: 2, name: 'Rural Development Grant', url: '/forms/uva-development.pdf' },
    ],
    districts: [
        { id: 801, name: 'Badulla' },
        { id: 802, name: 'Monaragala' },
    ],
  },
  {
    id: 9,
    name: 'Sabaragamuwa Province',
    description: 'Famous for gem mining and the Sinharaja Rainforest.',
    longDescription: 'Sabaragamuwa Province is renowned for its gem industry, centered around Ratnapura, the "City of Gems." It is also home to the Sinharaja Forest Reserve, a UNESCO World Heritage site and a biodiversity hotspot.',
    imageUrl: 'https://picsum.photos/seed/ratnapura/800/600',
    forms: [
        { id: 1, name: 'Gem Mining License', url: '/forms/sab-gem.pdf' },
        { id: 2, name: 'Rainforest Research Permit', url: '/forms/sab-research.pdf' },
    ],
    districts: [
        { id: 901, name: 'Ratnapura' },
        { id: 902, name: 'Kegalle' },
    ],
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 1,
    title: 'Nationwide Dengue Prevention Campaign Launched',
    content: 'A comprehensive campaign to eradicate dengue mosquito breeding grounds will be implemented across all provinces, with special focus on urban areas.',
    date: '2023-10-01',
    imageUrl: 'https://picsum.photos/seed/sl-news1/400/300',
  },
  {
    id: 2,
    title: 'New Library Opening in Kandy',
    content: 'A new state-of-the-art library is set to open its doors in Kandy. The grand opening ceremony will feature guest authors and activities for children.',
    date: '2023-10-02',
    provinceId: 2, // Central Province
    imageUrl: 'https://picsum.photos/seed/sl-news2/400/300',
  },
  {
    id: 3,
    title: 'Colombo Light Rail Project Update',
    content: 'The Ministry of Transport has announced the next phase of the Colombo Light Rail Transit (LRT) project, aimed at easing traffic congestion in the Western Province.',
    date: '2023-09-28',
    provinceId: 1, // Western Province
    imageUrl: 'https://picsum.photos/seed/sl-news3/400/300',
  },
  {
    id: 4,
    title: 'Anuradhapura Sacred City Development Plan',
    content: 'A new development plan for the sacred city of Anuradhapura in the North Central Province aims to improve facilities for pilgrims and tourists while preserving ancient sites.',
    date: '2023-09-25',
    provinceId: 7, // North Central Province
    imageUrl: 'https://picsum.photos/seed/sl-news4/400/300',
  },
  {
    id: 5,
    title: 'Surfing Championship to be Held in Arugam Bay',
    content: 'The Eastern Province will host the annual international surfing championship in Arugam Bay, attracting competitors and tourists from around the world.',
    date: '2023-10-05',
    provinceId: 5, // Eastern Province
    imageUrl: 'https://picsum.photos/seed/sl-news5/400/300',
  },
  {
    id: 6,
    title: 'Gem Auction in Ratnapura Sets New Record',
    content: 'A rare blue sapphire discovered in the Sabaragamuwa Province has set a new record at the national gem auction held in Ratnapura.',
    date: '2023-10-08',
    provinceId: 9, // Sabaragamuwa Province
    imageUrl: 'https://picsum.photos/seed/sl-news6/400/300',
  },
];